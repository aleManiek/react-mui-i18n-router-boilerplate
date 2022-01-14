import { Suspense, SuspenseProps, lazy } from 'react'
import { Loader } from 'components/common'
import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary'

type T = Promise<{ default: React.ComponentType<any> }>

export interface LoadableProps extends ErrorBoundaryProps {
  component: T
  loader?: SuspenseProps['fallback']
  props?: Object
}

const Loadable = ({
  component,
  props,
  errorHandler,
  loader,
  ...errorBoundaryProps
}: LoadableProps) => {
  const Component = lazy(() => component)
  return (
    <ErrorBoundary errorHandler={errorHandler} {...errorBoundaryProps}>
      <Suspense fallback={loader || <Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Loadable
