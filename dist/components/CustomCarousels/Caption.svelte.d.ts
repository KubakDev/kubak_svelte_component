import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        caption?: string;
        captionClass?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CaptionProps = typeof __propDef.props;
export type CaptionEvents = typeof __propDef.events;
export type CaptionSlots = typeof __propDef.slots;
export default class Caption extends SvelteComponent<CaptionProps, CaptionEvents, CaptionSlots> {
}
export {};
