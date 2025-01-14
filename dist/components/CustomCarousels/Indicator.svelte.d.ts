import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name?: string;
        selected?: boolean;
        indicatorClass?: string;
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
export type IndicatorProps = typeof __propDef.props;
export type IndicatorEvents = typeof __propDef.events;
export type IndicatorSlots = typeof __propDef.slots;
export default class Indicator extends SvelteComponent<IndicatorProps, IndicatorEvents, IndicatorSlots> {
}
export {};
