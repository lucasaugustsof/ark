import { Menu } from '@ark-ui/react/menu'
import { useState } from 'react'

export const RadioGroup = () => {
  const [value, setValue] = useState('React')

  return (
    <Menu.Root>
      <Menu.Trigger>Open menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
            {['React', 'Solid', 'Vue', 'Svelte'].map((framework) => (
              <Menu.RadioItem key={framework} value={framework}>
                <Menu.ItemIndicator>✅</Menu.ItemIndicator>
                <Menu.ItemText>{framework}</Menu.ItemText>
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
