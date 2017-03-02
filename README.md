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

async foo() {
  // blabla
  const path = document.getElementById('some-svg-path-element')
  await animateSvg(path, 1, false)
}
```

[npm-url]: https://npmjs.org/package/animate-svg
[downloads-image]: http://img.shields.io/npm/dm/animate-svg.svg
[npm-image]: http://img.shields.io/npm/v/animate-svg.svg
[david-dm-url]:https://david-dm.org/inker/animate-svg
[david-dm-image]:https://david-dm.org/inker/animate-svg.svg
[david-dm-dev-url]:https://david-dm.org/inker/animate-svg#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/animate-svg/dev-status.svg
