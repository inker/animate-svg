export declare type SVGGeometryElement = (SVGPathElement | SVGLineElement) & {
    getTotalLength: () => number;
};
declare var _default: (path: SVGGeometryElement, speed: number, reverse?: boolean) => Promise<Event>;
export default _default;
