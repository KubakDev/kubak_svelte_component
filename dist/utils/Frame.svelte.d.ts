import { SvelteComponent } from "svelte";
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';
import type { HTMLAnchorAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAnchorAttributes & {
        tag?: string;
        rounded?: boolean;
        border?: boolean;
        shadow?: boolean;
        transition?: ((node: HTMLElement, params: any) => TransitionConfig) | undefined;
        params?: object;
        node?: HTMLElement | undefined;
        use?: Action;
        options?: object;
        class?: string;
    };
    events: {
        click: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        focusin: FocusEvent;
        focusout: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FrameProps = typeof __propDef.props;
export type FrameEvents = typeof __propDef.events;
export type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponent<FrameProps, FrameEvents, FrameSlots> {
}
export {};
