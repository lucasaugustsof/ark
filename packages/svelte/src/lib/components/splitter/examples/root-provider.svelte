<script lang="ts">
  import { Splitter, useSplitter } from '@ark-ui/svelte/splitter'

  const id = $props.id()
  const splitter = useSplitter({
    id,
    defaultSize: [50, 50],
    panels: [{ id: 'a' }, { id: 'b' }],
  })
</script>

<button onclick={() => splitter().setSizes([100, 0])}>Maximize a</button>

<Splitter.RootProvider value={splitter}>
  <Splitter.Panel id="a">A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
  <Splitter.Panel id="b">B</Splitter.Panel>
</Splitter.RootProvider>
