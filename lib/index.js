"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(path) {
    if (typeof path.getTotalLength === 'function') {
        return path.getTotalLength();
    }
    var x1 = +path.getAttribute('x1') || 0;
    var x2 = +path.getAttribute('x2') || 0;
    var y1 = +path.getAttribute('y1') || 0;
    var y2 = +path.getAttribute('y2') || 0;
    var x = x2 - x1;
    var y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
function transitionEndPromise(path) {
    return new Promise(function (resolve, reject) {
        path.addEventListener('transitionend', function (e) {
            path.removeEventListener('transitionend', resolve);
            resolve(e);
        });
    });
}
exports.default = function (path, speed, reverse) {
    if (reverse === void 0) { reverse = false; }
    var length = getLength(path);
    var initialOffset = reverse ? -length : length;
    var duration = length / speed;
    var promise = transitionEndPromise(path);
    var style = path.style;
    style.transition = null;
    style.opacity = null;
    style.strokeDasharray = length + " " + length;
    style.strokeDashoffset = initialOffset.toString();
    path.getBoundingClientRect();
    style.transition = "stroke-dashoffset " + duration + "ms linear";
    style.strokeDashoffset = '0';
    return promise;
};
//# sourceMappingURL=index.js.map