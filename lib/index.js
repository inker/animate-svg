"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const once = (el, eventType) => new Promise(resolve => {
    el.addEventListener(eventType, function handler(e) {
        el.removeEventListener(eventType, handler);
        resolve(e);
    });
});
const transitionEndPromise = (path) => once(path, 'transitionend');
function getLineLength(path) {
    const x1 = +(path.getAttribute('x1') || 0);
    const x2 = +(path.getAttribute('x2') || 0);
    const y1 = +(path.getAttribute('y1') || 0);
    const y2 = +(path.getAttribute('y2') || 0);
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
const getLength = (path) => typeof path.getTotalLength === 'function' ? path.getTotalLength() : getLineLength(path);
exports.default = (path, speed, reverse = false) => {
    const length = getLength(path);
    const initialOffset = reverse ? -length : length;
    const duration = length / speed;
    const promise = transitionEndPromise(path);
    const { style } = path;
    style.transition = '';
    style.opacity = '';
    style.strokeDasharray = `${length} ${length}`;
    style.strokeDashoffset = initialOffset.toString();
    path.getBoundingClientRect();
    style.transition = `stroke-dashoffset ${duration}ms linear`;
    style.strokeDashoffset = '0';
    return promise;
};
//# sourceMappingURL=index.js.map