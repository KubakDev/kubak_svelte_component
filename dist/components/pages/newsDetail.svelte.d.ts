import { SvelteComponentTyped } from "svelte";
import type { NewsModel } from '../../models/newsModel';
declare const __propDef: {
    props: {
        news: NewsModel | undefined;
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
