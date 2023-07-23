import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        videoId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VideoPlayerProps = typeof __propDef.props;
export type VideoPlayerEvents = typeof __propDef.events;
export type VideoPlayerSlots = typeof __propDef.slots;
export default class VideoPlayer extends SvelteComponentTyped<VideoPlayerProps, VideoPlayerEvents, VideoPlayerSlots> {
}
export {};
