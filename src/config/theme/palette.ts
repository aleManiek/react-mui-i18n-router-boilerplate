import createPalette, { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    primary: string;
    secondary: string;
  }

  interface Palette {
    neutral: Palette['primary'];
    shadow: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    shadow: PaletteOptions['primary'];
  }
}

const palette: PaletteOptions = {
  type: 'light',
  primary: {
    light: '#DDDDDD',
    main: '#595959',
    dark: '#515151',
    contrastText: '#FFF',
  },
  secondary: {
    light: '#DDDDDD',
    main: '#595959',
    dark: '#515151',
    contrastText: '#FFF',
  },
  neutral: {
    light: '#F2F2F2',
    main: '#EBEBEB',
    dark: '#CBCBCB',
    contrastText: 'rgba(0,0,0,0.8)',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFF',
    primary: '#FFF9F6',
    secondary: '#8A8A8A',
  },
  text: {
    secondary: '#828282',
  },
  shadow: {
    main: 'rgba(0, 0, 0, 0.12)',
    dark: 'rgba(0, 0, 0, 0.28)',
  },
};

export default createPalette(palette);
