import { Button, ButtonProps, styled } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { paths, routes } from 'config'

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'inherit',
}))

type Keys = keyof typeof paths
type Paths = typeof paths[Keys]

interface ButtonLinkProps extends ButtonProps {
  to: Paths
}

const ButtonLink = ({ to, children, ...props }: ButtonLinkProps) => {
  const location = useLocation()
  const route = routes.find(({ path }) => path === to)

  if (!route) throw new Error(`No route specified for: ${to} path`)

  const isRouteModal = !!route.modal

  return (
    <StyledLink
      to={to}
      state={isRouteModal && { backgroundLocation: location }}
    >
      <Button {...props}>{children}</Button>
    </StyledLink>
  )
}
export default ButtonLink
