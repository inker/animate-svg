"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var once = function (el, eventType) { return new Promise(function (resolve) {
    el.addEventListener(eventType, function handler(e) {
        el.removeEventListener(eventType, handler);
        resolve(e);
    });
}); };
var transitionEndPromise = function (path) { return once(path, 'transitionend'); };
function getLineLength(path) {
    var x1 = +(path.getAttribute('x1') || 0);
    var x2 = +(path.getAttribute('x2') || 0);
    var y1 = +(path.getAttribute('y1') || 0);
    var y2 = +(path.getAttribute('y2') || 0);
    var x = x2 - x1;
    var y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}
var getLength = function (path) {
    return typeof path.getTotalLength === 'function' ? path.getTotalLength() : getLineLength(path);
};
exports.default = function (path, speed, reverse) {
    if (reverse === void 0) { reverse = false; }
    var length = getLength(path);
    var initialOffset = reverse ? -length : length;
    var duration = length / speed;
    var promise = transitionEndPromise(path);
    var style = path.style;
    style.transition = '';
    style.opacity = '';
    style.strokeDasharray = length + " " + length;
    style.strokeDashoffset = initialOffset.toString();
    path.getBoundingClientRect();
    style.transition = "stroke-dashoffset " + duration + "ms linear";
    style.strokeDashoffset = '0';
    return promise;
};
//# sourceMappingURL=index.js.map