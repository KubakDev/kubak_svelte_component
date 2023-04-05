import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        content?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type Card2Props = typeof __propDef.props;
export type Card2Events = typeof __propDef.events;
export type Card2Slots = typeof __propDef.slots;
export default class Card2 extends SvelteComponentTyped<Card2Props, Card2Events, Card2Slots> {
}
export {};
