import { SvelteComponentTyped } from "svelte";
import { ImgSourceEnum } from '../models/imgSourceEnum';
declare const __propDef: {
    props: {
        [x: string]: any;
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
        click: MouseEvent;
        focusin: FocusEvent;
        focusout: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MainCardProps = typeof __propDef.props;
export type MainCardEvents = typeof __propDef.events;
export type MainCardSlots = typeof __propDef.slots;
export default class MainCard extends SvelteComponentTyped<MainCardProps, MainCardEvents, MainCardSlots> {
}
export {};
