<script lang="ts">
  import classNames from 'classnames';
  import { noop } from 'svelte/internal';
  import type { Action } from 'svelte/action';
  import type { TransitionConfig } from 'svelte/transition';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  interface $$Props extends HTMLAnchorAttributes {
    tag?: string;
    rounded?: boolean;
    border?: boolean;
    shadow?: boolean;
    transition?: TransitionFunc | undefined;
    params?: object;
    node?: HTMLElement | undefined;
    use?: Action;
    options?: object;
    class?: string;
  }

  export let tag: string = 'div';

  // Export a prop through which you can set a desired svelte transition
  export let transition: TransitionFunc | undefined = undefined;
  // Pass in extra transition params
  export let params: object = {};

  // For components development
  export let node: HTMLElement | undefined = undefined;
  // Action function and its params
  export let use: Action = noop;
  export let options = {};

  let divClass: string;

  $: divClass = classNames($$props.class);
</script>

<svelte:element
  this={tag}
  use:use={options}
  bind:this={node}
  {...$$restProps}
  class={divClass}
  on:click
  on:mouseenter
  on:mouseleave
  on:focusin
  on:focusout>
  <slot />
</svelte:element>
