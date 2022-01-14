import { Route, Navigate } from 'react-router-dom'
import { ModuleRoute } from 'types'

const PrivateRoute = ({ path, ...props }: ModuleRoute) => {
  const isAuthenticated = true
  const redirectUrl = '/'

  if (!isAuthenticated) {
    return <Navigate to={redirectUrl} />
  }

  return <Route path={path} {...props} />
}

export default PrivateRoute
