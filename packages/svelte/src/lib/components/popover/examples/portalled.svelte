<script lang="ts">
  import { Popover } from '@ark-ui/svelte/popover'
  import { Portal } from '@ark-ui/svelte/portal'
  import { ChevronRightIcon } from 'lucide-svelte'
</script>

<Popover.Root portalled>
  <Popover.Trigger>
    Click Me
    <Popover.Indicator>
      <ChevronRightIcon />
    </Popover.Indicator>
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description</Popover.Description>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
