<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'

  export interface SelectTriggerBaseProps extends PolymorphicProps<'button'>, RefAttribute {}
  export interface SelectTriggerProps extends Assign<HTMLProps<'button'>, SelectTriggerBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '$lib/components/factory'
  import { useSelectContext } from './use-select-context'

  let { ref = $bindable(null), ...props }: SelectTriggerProps = $props()
  const select = useSelectContext()
  const mergedProps = $derived(mergeProps(select().getTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
