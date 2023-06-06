import React, { useState } from 'react'
import { SpinContext } from './SpinContext'
import Spinner from './Spinner'

type BaseProps = {
  children: React.ReactNode
}
type Props = BaseProps & {
  loading: boolean
  spinner?: React.ReactNode
}

type WithSpinProps = BaseProps & {
  value: boolean
  spinner?: React.ReactNode
}

type SpinComponent = React.FC<Props> & {
  WithContext: React.FC<WithSpinProps>
}

const Spin: SpinComponent = ({ children, loading, spinner = <Spinner /> }: Props) => {
  return (
    <div className={`sspin-provider ${loading ? 'sspin-loading' : ''}`}>
      <div className='sspin-overlay' role='status'>
        {spinner}
      </div>
      {children}
    </div>
  )
}

const WithContext = ({ children, value, spinner }: WithSpinProps) => {
  const [spin, setSpin] = useState(value)
  return (
    <SpinContext.Provider value={{ spin, setSpin }}>
      <Spin loading={spin} spinner={spinner}>
        {children}
      </Spin>
    </SpinContext.Provider>
  )
}

Spin.WithContext = WithContext

export default Spin
