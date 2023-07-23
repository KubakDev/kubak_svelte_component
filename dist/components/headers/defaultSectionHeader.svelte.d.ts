import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DefaultSectionHeaderProps = typeof __propDef.props;
export type DefaultSectionHeaderEvents = typeof __propDef.events;
export type DefaultSectionHeaderSlots = typeof __propDef.slots;
export default class DefaultSectionHeader extends SvelteComponentTyped<DefaultSectionHeaderProps, DefaultSectionHeaderEvents, DefaultSectionHeaderSlots> {
}
export {};
