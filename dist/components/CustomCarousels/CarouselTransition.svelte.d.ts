import { SvelteComponent } from "svelte";
import type { TransitionTypes, TransitionParamTypes } from '../types';
declare const __propDef: {
    props: {
        showIndicators?: boolean;
        showCaptions?: boolean;
        showThumbs?: boolean;
        images: any[];
        slideControls?: boolean;
        transitionType?: TransitionTypes;
        transitionParams?: TransitionParamTypes;
        loop?: boolean;
        duration?: number;
        divClass?: string;
        indicatorDivClass?: string;
        captionClass?: string;
        indicatorClass?: string;
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
export type CarouselTransitionProps = typeof __propDef.props;
export type CarouselTransitionEvents = typeof __propDef.events;
export type CarouselTransitionSlots = typeof __propDef.slots;
export default class CarouselTransition extends SvelteComponent<CarouselTransitionProps, CarouselTransitionEvents, CarouselTransitionSlots> {
}
export {};
