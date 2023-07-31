import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        cardType?: any;
        title?: string | undefined;
        img?: string | undefined;
        thumbnail?: string | undefined;
        short_description?: string | undefined;
        imgSource?: string | undefined;
        overlayPrimaryColor?: string | undefined;
        overlaySecondaryColor?: string | undefined;
        primaryColor?: string | undefined;
        secondaryColor?: string | undefined;
        backgroundColor?: string | undefined;
        overlayBackgroundColor?: string | undefined;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        date?: Date | undefined;
        imageClass?: string | undefined;
        to_text?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ExpoCardProps = typeof __propDef.props;
export type ExpoCardEvents = typeof __propDef.events;
export type ExpoCardSlots = typeof __propDef.slots;
export default class ExpoCard extends SvelteComponent<ExpoCardProps, ExpoCardEvents, ExpoCardSlots> {
}
export {};
