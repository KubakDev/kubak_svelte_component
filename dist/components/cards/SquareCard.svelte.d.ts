/** @typedef {typeof __propDef.props}  SquareCardProps */
/** @typedef {typeof __propDef.events}  SquareCardEvents */
/** @typedef {typeof __propDef.slots}  SquareCardSlots */
export default class SquareCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        img: string;
        thumbnail: string;
        created_at: number;
        short_description: string;
        imgSource: ImgSourceEnum;
    } | undefined;
    colors?: {
        onPrimaryColor: string;
        onSecondaryColor: string;
        primaryColor: string;
        secondaryColor: string;
        backgroundColor: string;
        onBackgroundColor: string;
    } | undefined;
    imageData?: {
        thumbnail: string;
        imgSource: ImgSourceEnum;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SquareCardProps = typeof __propDef.props;
export type SquareCardEvents = typeof __propDef.events;
export type SquareCardSlots = typeof __propDef.slots;
import { ImgSourceEnum } from '../models/imgSourceEnum';
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img: string;
            thumbnail: string;
            created_at: number;
            short_description: string;
            imgSource: ImgSourceEnum;
        } | undefined;
        colors?: {
            onPrimaryColor: string;
            onSecondaryColor: string;
            primaryColor: string;
            secondaryColor: string;
            backgroundColor: string;
            onBackgroundColor: string;
        } | undefined;
        imageData?: {
            thumbnail: string;
            imgSource: ImgSourceEnum;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
