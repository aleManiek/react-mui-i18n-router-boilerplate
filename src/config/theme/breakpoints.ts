import createBreakpoints, { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    tableMd: 1440,
  },
};

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tableMd: true;
  }
}

export default createBreakpoints(breakpoints);
