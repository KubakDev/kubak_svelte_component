/** @typedef {typeof __propDef.props}  CarouselProps */
/** @typedef {typeof __propDef.events}  CarouselEvents */
/** @typedef {typeof __propDef.slots}  CarouselSlots */
export default class Carousel extends SvelteComponentTyped<{
    images: any;
    showIndicators?: boolean | undefined;
    showCaptions?: boolean | undefined;
    showThumbs?: boolean | undefined;
    slideControls?: boolean | undefined;
    loop?: boolean | undefined;
    duration?: number | undefined;
    divClass?: string | undefined;
    indicatorDivClass?: string | undefined;
    captionClass?: string | undefined;
    indicatorClass?: string | undefined;
    slideClass?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    previous: {};
    next: {};
}> {
}
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        images: any;
        showIndicators?: boolean | undefined;
        showCaptions?: boolean | undefined;
        showThumbs?: boolean | undefined;
        slideControls?: boolean | undefined;
        loop?: boolean | undefined;
        duration?: number | undefined;
        divClass?: string | undefined;
        indicatorDivClass?: string | undefined;
        captionClass?: string | undefined;
        indicatorClass?: string | undefined;
        slideClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        previous: {};
        next: {};
    };
};
export {};
