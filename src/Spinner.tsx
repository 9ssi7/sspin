import React, { useState } from 'react'
import Spinner from './Spin'
import { SpinContext } from './SpinContext'

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
    <div className={`ssi-spin ${loading && 'ssi-spin-loading'}`}>
      {loading && (
        <div className='text-primary ssi-spin-overlay' role='status'>
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
