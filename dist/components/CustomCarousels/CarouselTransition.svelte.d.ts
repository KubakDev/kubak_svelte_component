import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        showIndicators?: boolean | undefined;
        showCaptions?: boolean | undefined;
        showThumbs?: boolean | undefined;
        images: any[];
        slideControls?: boolean | undefined;
        transitionType?: any;
        transitionParams?: any;
        loop?: boolean | undefined;
        duration?: number | undefined;
        divClass?: string | undefined;
        indicatorDivClass?: string | undefined;
        captionClass?: string | undefined;
        indicatorClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        previous: {};
        next: {};
    };
};
export type CarouselTransitionProps = typeof __propDef.props;
export type CarouselTransitionEvents = typeof __propDef.events;
export type CarouselTransitionSlots = typeof __propDef.slots;
export default class CarouselTransition extends SvelteComponentTyped<CarouselTransitionProps, CarouselTransitionEvents, CarouselTransitionSlots> {
}
export {};
