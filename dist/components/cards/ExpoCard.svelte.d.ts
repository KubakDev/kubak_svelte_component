/** @typedef {typeof __propDef.props}  ExpoCardProps */
/** @typedef {typeof __propDef.events}  ExpoCardEvents */
/** @typedef {typeof __propDef.slots}  ExpoCardSlots */
export default class ExpoCard extends SvelteComponent<{
    img?: any;
    title?: any;
    date?: any;
    cardType?: typeof CardType | undefined;
    thumbnail?: any;
    short_description?: any;
    imgSource?: any;
    overlayPrimaryColor?: any;
    overlaySecondaryColor?: any;
    primaryColor?: any;
    secondaryColor?: any;
    backgroundColor?: any;
    overlayBackgroundColor?: any;
    startDate?: any;
    endDate?: any;
    imageClass?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ExpoCardProps = typeof __propDef.props;
export type ExpoCardEvents = typeof __propDef.events;
export type ExpoCardSlots = typeof __propDef.slots;
import { CardType } from '../../models/cardType';
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        img?: any;
        title?: any;
        date?: any;
        cardType?: typeof CardType | undefined;
        thumbnail?: any;
        short_description?: any;
        imgSource?: any;
        overlayPrimaryColor?: any;
        overlaySecondaryColor?: any;
        primaryColor?: any;
        secondaryColor?: any;
        backgroundColor?: any;
        overlayBackgroundColor?: any;
        startDate?: any;
        endDate?: any;
        imageClass?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
