import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TestCardProps = typeof __propDef.props;
export type TestCardEvents = typeof __propDef.events;
export type TestCardSlots = typeof __propDef.slots;
export default class TestCard extends SvelteComponentTyped<TestCardProps, TestCardEvents, TestCardSlots> {
}
export {};
