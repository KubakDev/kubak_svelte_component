/** @typedef {typeof __propDef.props}  SimpleCardProps */
/** @typedef {typeof __propDef.events}  SimpleCardEvents */
/** @typedef {typeof __propDef.slots}  SimpleCardSlots */
export default class SimpleCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        img: string;
        date: string;
    } | undefined;
    colors?: {
        onPrimaryColor: string;
        onSecondaryColor: string;
        primaryColor: string;
        secondaryColor: string;
        backgroundColor: string;
        onBackgroundColor: string;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SimpleCardProps = typeof __propDef.props;
export type SimpleCardEvents = typeof __propDef.events;
export type SimpleCardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img: string;
            date: string;
        } | undefined;
        colors?: {
            onPrimaryColor: string;
            onSecondaryColor: string;
            primaryColor: string;
            secondaryColor: string;
            backgroundColor: string;
            onBackgroundColor: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
