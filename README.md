# animate-svg

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Easily animate an SVG line or path to look like it's animating itself.

## Installation
```
npm install --save animate-svg
```

## Usage
Basic usage:
```javascript
import animateSvg from 'animate-svg'

async function foo() {
  // blabla
  const path = document.getElementById('some-svg-path-element')
  // the animateSvg function esentially returns a promise
  // so you can await it if you use it in an async function
  await animateSvg(path, 1, false)
  // blablabla
}
```
The function `animateSvg` accepts 3 parameters:
- the `SVGPathElement` or `SVGLineElement` to animate
- the **speed** at which the animation should occur (pixels per millisecond)
- (optional) direction of the animation: `true` is for reverse animation, `false` is for normal

[npm-url]: https://npmjs.org/package/animate-svg
[downloads-image]: http://img.shields.io/npm/dm/animate-svg.svg
[npm-image]: http://img.shields.io/npm/v/animate-svg.svg
[david-dm-url]:https://david-dm.org/inker/animate-svg
[david-dm-image]:https://david-dm.org/inker/animate-svg.svg
[david-dm-dev-url]:https://david-dm.org/inker/animate-svg#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/animate-svg/dev-status.svg
