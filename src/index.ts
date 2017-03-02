export type SVGGeometryElement = (SVGPathElement | SVGLineElement) & { getTotalLength: () => number }

function getLength(path: SVGGeometryElement) {
    if (typeof path.getTotalLength === 'function') {
        return path.getTotalLength()
    }
    const x1 = +path.getAttribute('x1') || 0
    const x2 = +path.getAttribute('x2') || 0
    const y1 = +path.getAttribute('y1') || 0
    const y2 = +path.getAttribute('y2') || 0
    const x = x2 - x1
    const y = y2 - y1
    return Math.sqrt(x * x + y * y)
}

function transitionEndPromise(path: SVGGeometryElement) {
    return new Promise<Event>((resolve, reject) => {
        path.addEventListener('transitionend', e => {
            path.removeEventListener('transitionend', resolve)
            resolve(e)
        })
    })
}

export default (path: SVGGeometryElement, speed: number, reverse = false) => {
    const length = getLength(path)
    const initialOffset = reverse ? -length : length
    const duration = length / speed

    const promise = transitionEndPromise(path)

    const { style } = path
    style.transition = null
    style.opacity = null
    style.strokeDasharray = `${length} ${length}`
    style.strokeDashoffset = initialOffset.toString()
    path.getBoundingClientRect()
    style.transition = `stroke-dashoffset ${duration}ms linear`
    style.strokeDashoffset = '0'

    return promise
}
