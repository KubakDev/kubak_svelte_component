import { SvelteComponent } from "svelte";
import type { CarouselImage } from '../../models/newsModel';
import type { HTMLAnchorAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAnchorAttributes & {
        imagesCarousel?: CarouselImage[] | undefined;
        long_description: string | undefined;
        videoId?: string | undefined;
        customClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type DetailPageProps = typeof __propDef.props;
export type DetailPageEvents = typeof __propDef.events;
export type DetailPageSlots = typeof __propDef.slots;
export default class DetailPage extends SvelteComponent<DetailPageProps, DetailPageEvents, DetailPageSlots> {
}
export {};
