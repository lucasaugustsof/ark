import { Listbox, createListCollection } from '@ark-ui/solid/listbox'
import { Index } from 'solid-js'

export const Basic = () => {
  const collection = createListCollection({ items: ['React', 'Solid', 'Vue', 'Svelte'] })

  return (
    <Listbox.Root collection={collection}>
      <Listbox.Label>Select your Framework</Listbox.Label>
      <Listbox.Content>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item item={item()}>
              <Listbox.ItemText>{item()}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  )
}
