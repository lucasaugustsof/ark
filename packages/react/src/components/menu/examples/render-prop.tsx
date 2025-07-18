import { Menu } from '@ark-ui/react/menu'

export const RenderProp = () => (
  <Menu.Root>
    <Menu.Context>{(menu) => <Menu.Trigger>Menu is {menu.open ? 'open' : 'closed'}</Menu.Trigger>}</Menu.Context>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">
          <Menu.ItemContext>
            {(menuItem) => <>React is {menuItem.highlighted ? 'highlighted' : 'not highlighted'}</>}
          </Menu.ItemContext>
        </Menu.Item>
        <Menu.Item value="solid">Solid</Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
        <Menu.Item value="svelte">Svelte</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
