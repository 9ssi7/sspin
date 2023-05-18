import { createContext } from 'react'

export const SpinContext = createContext<[boolean, (value: boolean) => void]>([false, () => false])
