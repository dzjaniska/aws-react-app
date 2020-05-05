import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const textColor = '#212529';

export const lrindigo = {
  50: '#e3e5f0',
  100: '#b9bfda',
  200: '#8b94c1',
  300: '#1565c0',
  400: '#0d4cad',
  500: '#172983',
  600: '#14247b',
  700: '#111f70',
  800: '#0d1966',
  900: '#070f53',
  A100: '#878fff',
  A200: '#545fff',
  A400: '#212fff',
  A700: '#0817ff',
  'contrastDefaultColor': 'light'
};

export const lrred = {
  50: '#fce0e4',
  100: '#f6b3ba',
  200: '#f1808d',
  300: '#eb4d5f',
  400: '#e6263c',
  500: '#e2001a',
  600: '#df0017',
  700: '#da0013',
  800: '#d6000f',
  900: '#cf0008',
  A100: '#fff6f7',
  A200: '#ffc3c4',
  A400: '#ff9092',
  A700: '#ff7778',
  'contrastDefaultColor': 'light'
};

export const lrgrey = {
  50: '#fafbfb',
  100: '#f4f4f4',
  200: '#eceded',
  300: '#e4e5e6',
  400: '#dfe0e0',
  500: '#d9dadb',
  600: '#d5d6d7',
  700: '#cfd0d2',
  800: '#cacbcd',
  900: '#c0c2c4',
  A100: '#dadce0',
  A200: '#e7ebed',
  A400: '#777777',
  A700: '#666666',
  A900: '#646f79',
  'contrastDefaultColor': 'dark'
};

export default {
  black,
  white,
  lrindigo,
  lrred,
  lrgrey,
  primary: {
    contrastText: white,
    dark: lrindigo[400],
    main: lrindigo[300],
    light: lrindigo[100]
  },
  secondary: {
    contrastText: white,
    dark: lrgrey['A900'],
    main: lrgrey['A400'],
    light: lrgrey['A100']
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: textColor,
    secondary: lrindigo[300],
    link: lrindigo[600]
  },
  link: lrindigo[700],
  icon: lrindigo[700],
  navigation: lrgrey['A900'],
  navigationActive: lrindigo[300],
  background: {
    default: '#f5f5f5',
    paper: white,
    main: white
  },
  divider: colors.grey[300]
};
