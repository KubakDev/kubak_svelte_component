import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DefaultNavigationHeaderProps = typeof __propDef.props;
export type DefaultNavigationHeaderEvents = typeof __propDef.events;
export type DefaultNavigationHeaderSlots = typeof __propDef.slots;
export default class DefaultNavigationHeader extends SvelteComponent<DefaultNavigationHeaderProps, DefaultNavigationHeaderEvents, DefaultNavigationHeaderSlots> {
}
export {};
