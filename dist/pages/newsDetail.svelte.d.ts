import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data?: {
            title: string;
            long_description: string;
            images: never[];
        } | undefined;
        long_description?: string | undefined;
        images?: {
            imgurl: string;
            id: number;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NewsDetailProps = typeof __propDef.props;
export type NewsDetailEvents = typeof __propDef.events;
export type NewsDetailSlots = typeof __propDef.slots;
export default class NewsDetail extends SvelteComponentTyped<NewsDetailProps, NewsDetailEvents, NewsDetailSlots> {
}
export {};
