<script module lang="ts">
  import type { HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'

  export interface AvatarFallbackBaseProps extends PolymorphicProps<'span'>, RefAttribute {}
  export interface AvatarFallbackProps extends HTMLProps<'span'>, AvatarFallbackBaseProps {}
</script>

<script lang="ts">
  import { useAvatarContext } from './use-avatar-context'
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'

  let { ref = $bindable(null), ...props }: AvatarFallbackProps = $props()

  const avatar = useAvatarContext()
  const mergedProps = $derived(mergeProps(avatar().getFallbackProps(), props))
</script>

<Ark as="span" bind:ref {...mergedProps} />
