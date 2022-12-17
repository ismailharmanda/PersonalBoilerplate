import { extendTheme } from 'native-base';

const newColorTheme = {
  text: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
  heading: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

export const theme = extendTheme({ colors: newColorTheme });

export const customTheme = {
  radius: 7,
  text: {
    fontFamily: 'Silka, sans-serif',
    size: {
      xl: {
        fontSize: 28,
        lineHeight: 33.6,
      },
      lg: {
        fontSize: 16,
        lineHeight: 21,
      },
      md: {
        fontSize: 16,
        lineHeight: 21,
      },
      sm: {
        fontSize: 14,
        lineHeight: 16.8,
      },
      xs: {
        fontSize: 12,
        lineHeight: 14.4,
      },
    },
  },
  colors: {
    base: {
      transparent: 'rgba(255, 255, 255, 0)',
      black: '#000000',
      white: '#ffffff',
      link: '#0000FF',
      blackCore: '#06001E',
    },
    primary: {
      darker: '#000022',
      dark: '#201255',
      regular: '#534588',
      light: '#8678BB',
      lighter: '#B9ABEE',
      xlighter: '#ECDEFF',
      'eggplant-10': '#EEECF7',
      'eggplant-core': '#5941B0',
    },
    secondary: {
      darker: '#770102',
      dark: '#CC2627',
      regular: '#FF595A',
      light: 'rgba(255, 89, 90, 0.6)',
      lighter: 'rgba(255, 89, 90, 0.2)',
    },
    neutral: {
      darkest: '#A7ABB2',
      darker: '#DADEE5',
      dark: '#F5F6F7',
      regular: '#FFFFFF',
      link: '#0000FF',
    },
    utility: {
      regular: '#000000',
      lighter: '#414550',
      lightest: '#747880',
      background: {
        tint: 'rgba(0, 0, 34, 0.7)',
        tint2: 'rgba(0, 0, 34, 0.5)',
      },
    },
    success: {
      regular: '#00947E',
      light: '#E7FFFB',
    },
  },
  shadow: {
    elevation1: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    elevation2: {
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    elevation3: {
      shadowColor: 'rgba(0, 0, 0, 0.05)',
      shadowOffset: {
        width: 0,
        height: 4,
        blur: 4,
      },
      shadowRadius: 7,
    },
  },
  contentWidth: 992,
};
