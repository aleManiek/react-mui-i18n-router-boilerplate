import {
  Routes as BaseRoutes,
  Route,
  Navigate,
  useLocation,
  Location,
} from 'react-router-dom'
import { ModuleRoute } from 'types'
import { partition } from 'utils/helpers'
import { PrivateRoute } from 'components/common'

export interface RoutesProps {
  routes: ModuleRoute[]
}
const Routes = ({ routes }: RoutesProps) => {
  const location = useLocation()
  const { backgroundLocation } = (location.state || {}) as {
    backgroundLocation?: Location
  }
  const [stanrdardRoutes, modalRoutes] = partition(
    routes,
    route => !route.modal
  )

  return (
    <>
      <BaseRoutes location={backgroundLocation || location}>
        {stanrdardRoutes.map((route, i) =>
          route.public ? (
            <Route key={`publicRoute-${i}`} {...route} />
          ) : (
            <PrivateRoute key={`privateRoute-${i}`} {...route} />
          )
        )}
      </BaseRoutes>
      {backgroundLocation && (
        <BaseRoutes>
          {modalRoutes.map((route, i) => (
            <Route key={`modalRoute-${i}`} {...route} />
          ))}
        </BaseRoutes>
      )}
    </>
  )
}
export default Routes
