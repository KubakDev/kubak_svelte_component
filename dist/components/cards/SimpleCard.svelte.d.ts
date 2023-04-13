import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img?: string | undefined;
            date: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SimpleCardProps = typeof __propDef.props;
export type SimpleCardEvents = typeof __propDef.events;
export type SimpleCardSlots = typeof __propDef.slots;
export default class SimpleCard extends SvelteComponentTyped<SimpleCardProps, SimpleCardEvents, SimpleCardSlots> {
}
export {};
