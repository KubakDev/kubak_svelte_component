/** @typedef {typeof __propDef.props}  MainCardProps */
/** @typedef {typeof __propDef.events}  MainCardEvents */
/** @typedef {typeof __propDef.slots}  MainCardSlots */
export default class MainCard extends SvelteComponentTyped<{
    data?: {
        title: string;
        img: string;
        date: string;
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
export type MainCardProps = typeof __propDef.props;
export type MainCardEvents = typeof __propDef.events;
export type MainCardSlots = typeof __propDef.slots;
import { ImgSourceEnum } from '../models/imgSourceEnum';
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            img: string;
            date: string;
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
