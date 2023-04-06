/** @typedef {typeof __propDef.props}  MainCardProps */
/** @typedef {typeof __propDef.events}  MainCardEvents */
/** @typedef {typeof __propDef.slots}  MainCardSlots */
export default class MainCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        description: string;
        date: string;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MainCardProps = typeof __propDef.props;
export type MainCardEvents = typeof __propDef.events;
export type MainCardSlots = typeof __propDef.slots;
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
