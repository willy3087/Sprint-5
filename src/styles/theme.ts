import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    coffee: {
      50: '#faf5f0',
      100: '#f0e4d7',
      200: '#e3d0bd',
      300: '#d4b5a0',
      400: '#c19575',
      500: '#8B4513', // Saddle Brown - cor principal
      600: '#6b3410',
      700: '#5a2c0d',
      800: '#4a240b',
      900: '#3a1c08',
    },
    burgundy: {
      50: '#fdf2f4',
      100: '#fce4e9',
      200: '#fac7d3',
      300: '#f69fb0',
      400: '#ef6b84',
      500: '#800020', // Burgundy - cor secundária
      600: '#6b001a',
      700: '#5a0016',
      800: '#4a0012',
      900: '#3f0010',
    },
    darkBrown: {
      50: '#faf8f5',
      100: '#f4f0e8',
      200: '#e8dcc8',
      300: '#d4c2a0',
      400: '#b8956b',
      500: '#8b6f47',
      600: '#6b5435',
      700: '#4a3b26',
      800: '#3d2f1e',
      900: '#2d2318',
    },
    cream: {
      50: '#fffef7',
      100: '#fffce8',
      200: '#fff8d1',
      300: '#FFF8DC', // Cornsilk - cor de fundo
      400: '#ffed99',
      500: '#ffe066',
      600: '#ffd633',
      700: '#ffcc00',
      800: '#e6b800',
      900: '#cca300',
    },
  },
  fonts: {
    heading: `'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  fontSizes: {
    '2xs': '10px',  // mínima
    xs: '11px',
    sm: '12px',
    md: '14px',
    lg: '15px',
    xl: '16px',     // máxima para texto normal
    '2xl': '16px',  // limitando tamanhos maiores
    '3xl': '16px',
    '4xl': '16px',
    '5xl': '16px',
    '6xl': '16px',
  },
  styles: {
    global: {
      '@import': "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        fontFamily: 'Roboto, sans-serif',
        fontSize: 'md',
        lineHeight: 'base',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
      },
    },
  },
  components: {
    Button: {
      variants: {
        coffee: {
          bg: 'coffee.500',
          color: 'white',
          _hover: {
            bg: 'coffee.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
        burgundy: {
          bg: 'burgundy.500',
          color: 'white',
          _hover: {
            bg: 'burgundy.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'xl',
          boxShadow: 'sm',
          transition: 'all 0.3s',
          _hover: {
            boxShadow: 'lg',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    Badge: {
      variants: {
        coffee: {
          bg: 'coffee.100',
          color: 'coffee.800',
        },
        burgundy: {
          bg: 'burgundy.100',
          color: 'burgundy.800',
        },
      },
    },
  },
});

export default theme;