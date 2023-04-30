/** @typedef {typeof __propDef.props}  NewsDetailProps */
/** @typedef {typeof __propDef.events}  NewsDetailEvents */
/** @typedef {typeof __propDef.slots}  NewsDetailSlots */
export default class NewsDetail extends SvelteComponentTyped<{
    data?: {
        title: string;
        description: string;
        images: never[];
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NewsDetailProps = typeof __propDef.props;
export type NewsDetailEvents = typeof __propDef.events;
export type NewsDetailSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            description: string;
            images: never[];
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
