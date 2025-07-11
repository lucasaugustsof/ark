import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { RenderStrategyPropsProvider, splitRenderStrategyProps } from '../../utils/render-strategy'
import type { PolymorphicProps } from '../factory'
import type { UsePresenceProps } from '../presence'
import { PresenceProvider, usePresence } from '../presence'
import { splitPresenceProps } from '../presence/split-presence-props'
import type { UseDialogReturn } from './use-dialog'
import { DialogProvider } from './use-dialog-context'

interface RootProviderProps {
  value: UseDialogReturn
}

export interface DialogRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {}
export interface DialogRootProviderProps extends DialogRootProviderBaseProps {
  children?: ReactNode | undefined
}

export const DialogRootProvider = (props: DialogRootProviderProps) => {
  const [presenceProps, { value: dialog, children }] = splitPresenceProps(props)
  const [renderStrategyProps] = splitRenderStrategyProps(presenceProps)
  const presence = usePresence(mergeProps({ present: dialog.open }, presenceProps))

  return (
    <DialogProvider value={dialog}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <PresenceProvider value={presence}>{children}</PresenceProvider>
      </RenderStrategyPropsProvider>
    </DialogProvider>
  )
}
