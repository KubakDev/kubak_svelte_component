/** @typedef {typeof __propDef.props}  HorizontalCardProps */
/** @typedef {typeof __propDef.events}  HorizontalCardEvents */
/** @typedef {typeof __propDef.slots}  HorizontalCardSlots */
export default class HorizontalCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        description: string;
        date: string;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HorizontalCardProps = typeof __propDef.props;
export type HorizontalCardEvents = typeof __propDef.events;
export type HorizontalCardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            description: string;
            date: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
