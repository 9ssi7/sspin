import { createContext } from 'react'

type SpinContextType = {
  spin: boolean
  setSpin: (value: boolean) => void
}

export const SpinContext = createContext<SpinContextType>({
  spin: false,
  setSpin: () => false,
})
