export type SVGGeometryElement = SVGPathElement | SVGLineElement

const once = <K extends keyof HTMLElementEventMap>(
    el: EventTarget,
    eventType: K,
) => new Promise<HTMLElementEventMap[K]>(resolve => {
    el.addEventListener(eventType, function handler(e) {
        el.removeEventListener(eventType, handler)
        resolve(e)
    })
})

const transitionEndPromise = (path: SVGGeometryElement) => once(path, 'transitionend')

function getLineLength(path: SVGLineElement) {
    const x1 = +(path.getAttribute('x1') || 0)
    const x2 = +(path.getAttribute('x2') || 0)
    const y1 = +(path.getAttribute('y1') || 0)
    const y2 = +(path.getAttribute('y2') || 0)
    const x = x2 - x1
    const y = y2 - y1
    return Math.sqrt(x * x + y * y)
}

const getLength = (path: SVGGeometryElement): number =>
    typeof path.getTotalLength === 'function' ? path.getTotalLength() : getLineLength(path as SVGLineElement)

export default (path: SVGGeometryElement, speed: number, reverse = false) => {
    const length = getLength(path)
    const initialOffset = reverse ? -length : length
    const duration = length / speed

    const promise = transitionEndPromise(path)

    const { style } = path
    style.transition = ''
    style.opacity = ''
    style.strokeDasharray = `${length} ${length}`
    style.strokeDashoffset = initialOffset.toString()
    path.getBoundingClientRect()
    style.transition = `stroke-dashoffset ${duration}ms linear`
    style.strokeDashoffset = '0'

    return promise as Promise<Event>
}
