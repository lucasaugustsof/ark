import { Menu } from '@ark-ui/react/menu'
import { useState } from 'react'

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Trigger from the outside
      </button>
      <Menu.Root open={isOpen}>
        <Menu.Trigger>
          Open menu <Menu.Indicator>➡️</Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="react">React</Menu.Item>
            <Menu.Item value="solid">Solid</Menu.Item>
            <Menu.Item value="vue">Vue</Menu.Item>
            <Menu.Item value="svelte">Svelte</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}
