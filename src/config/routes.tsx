import { Loadable } from 'components/common'
import { paths } from 'config'
import { ModuleRoute } from 'types'

const routes: ModuleRoute[] = [
  {
    path: paths.home,
    public: true,
    element: Loadable({
      component: import('pages/Home'),
    }),
  },
  {
    path: paths.signIn,
    public: true,
    element: Loadable({
      component: import('pages/Login'),
    }),
  },
  {
    path: paths.noMatch,
    public: true,
    element: Loadable({
      component: import('pages/Home'),
    }),
  },
  {
    path: paths.modal,
    modal: true,
    public: true,
    element: Loadable({
      component: import('pages/Modal'),
    }),
  },
]

export default routes
