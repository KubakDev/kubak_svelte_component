import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        showIndicators?: boolean;
        showCaptions?: boolean;
        showThumbs?: boolean;
        images: any[];
        slideControls?: boolean;
        loop?: boolean;
        duration?: number;
        divClass?: string;
        indicatorDivClass?: string;
        captionClass?: string;
        indicatorClass?: string;
        slideClass?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        previous: {};
        next: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
export default class Carousel extends SvelteComponent<CarouselProps, CarouselEvents, CarouselSlots> {
}
export {};
