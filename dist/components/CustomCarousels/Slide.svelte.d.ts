import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        image?: string;
        altTag?: string;
        attr?: string;
        slideClass?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
export default class Slide extends SvelteComponent<SlideProps, SlideEvents, SlideSlots> {
}
export {};
