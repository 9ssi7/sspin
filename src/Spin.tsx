import React, { useState } from 'react'
import { SpinContext } from './SpinContext'
import Spinner from './Spinner'

type BaseProps = {
  children: React.ReactNode
}
type Props = BaseProps & {
  loading: boolean
}

type WithSpinProps = BaseProps & {
  value: boolean
}

type SpinComponent = React.FC<Props> & {
  WithContext: React.FC<WithSpinProps>
}

const Spin: SpinComponent = ({ children, loading }: Props) => {
  return (
    <div className={`sspin-provider ${loading ? 'sspin-loading' : ''}`}>
      {loading && (
        <div className='sspin-overlay' role='status'>
          <Spinner></Spinner>
        </div>
      )}
      {children}
    </div>
  )
}

const WithContext = ({ children, value }: WithSpinProps) => {
  const [loading, setLoading] = useState(value)
  return (
    <SpinContext.Provider value={[loading, setLoading]}>
      <Spin loading={loading}>{children}</Spin>
    </SpinContext.Provider>
  )
}

Spin.WithContext = WithContext
