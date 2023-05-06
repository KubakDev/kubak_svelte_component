/** @typedef {typeof __propDef.props}  FlatCardProps */
/** @typedef {typeof __propDef.events}  FlatCardEvents */
/** @typedef {typeof __propDef.slots}  FlatCardSlots */
export default class FlatCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        img: string;
        thumbnail: string;
        created_at: number;
        short_description: string;
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
export type FlatCardProps = typeof __propDef.props;
export type FlatCardEvents = typeof __propDef.events;
export type FlatCardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img: string;
            thumbnail: string;
            created_at: number;
            short_description: string;
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
