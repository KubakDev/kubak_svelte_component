<script>import classNames from 'classnames';
import { noop } from 'svelte/internal';
export let tag = 'div';
// Export a prop through which you can set a desired svelte transition
export let transition = undefined;
// Pass in extra transition params
export let params = {};
// For components development
export let node = undefined;
// Action function and its params
export let use = noop;
export let options = {};
let divClass;
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
