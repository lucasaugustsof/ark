<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'

  export interface SelectControlBaseProps extends PolymorphicProps<'div'>, RefAttribute {}
  export interface SelectControlProps extends Assign<HTMLProps<'div'>, SelectControlBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '$lib/components/factory'
  import { useSelectContext } from './use-select-context'

  let { ref = $bindable(null), ...props }: SelectControlProps = $props()
  const select = useSelectContext()
  const mergedProps = $derived(mergeProps(select().getControlProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
