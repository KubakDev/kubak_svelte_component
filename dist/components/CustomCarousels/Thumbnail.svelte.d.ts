import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        thumbImg?: string;
        altTag?: string;
        titleLink?: string;
        id: number;
        thumbWidth: number;
        selected?: boolean;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ThumbnailProps = typeof __propDef.props;
export type ThumbnailEvents = typeof __propDef.events;
export type ThumbnailSlots = typeof __propDef.slots;
export default class Thumbnail extends SvelteComponent<ThumbnailProps, ThumbnailEvents, ThumbnailSlots> {
}
export {};
