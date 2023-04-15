import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img?: string | undefined;
            date: string;
            description: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FlatCardProps = typeof __propDef.props;
export type FlatCardEvents = typeof __propDef.events;
export type FlatCardSlots = typeof __propDef.slots;
export default class FlatCard extends SvelteComponentTyped<FlatCardProps, FlatCardEvents, FlatCardSlots> {
}
export {};
