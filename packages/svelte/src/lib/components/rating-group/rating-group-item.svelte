<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'
  import type { ItemProps } from '@zag-js/rating-group'

  export interface RatingGroupItemBaseProps extends ItemProps, PolymorphicProps<'span'>, RefAttribute {}
  export interface RatingGroupItemProps extends Assign<HTMLProps<'span'>, RatingGroupItemBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'
  import { useRatingGroupContext } from './use-rating-group-context'
  import { RatingGroupItemProvider } from './use-rating-group-item-context'

  let { ref = $bindable(null), ...props }: RatingGroupItemProps = $props()
  const ratingGroup = useRatingGroupContext()

  const itemState = $derived(ratingGroup().getItemState(props))
  const mergedProps = $derived(mergeProps(ratingGroup().getItemProps(props), props))

  RatingGroupItemProvider(() => itemState)
</script>

<Ark as="span" bind:ref {...mergedProps} />
