import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ComponentsProps } from '@material-ui/core/styles/props';

/**
 * This maps Material-UI's link behavior to React Router.
 */
const RouterLink = forwardRef<any, Omit<LinkProps, 'to'> & { href: LinkProps['to'] }>(({ href, ...props }, ref) => <Link ref={ref} to={href} {...props} />);

const props: ComponentsProps = {
  MuiTextField: {
    fullWidth: true,
    variant: 'standard',
  },
  MuiInput: {
    fullWidth: true,
  },
  MuiFormControl: {
    fullWidth: true,
  },
  MuiButton: {
    fullWidth: true,
  },
  MuiLink: {
    // @ts-ignore
    component: RouterLink,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiSkeleton: {
    animation: 'pulse',
  },
};

export default props;
