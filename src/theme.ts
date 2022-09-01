//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createTheme } from '@material-ui/core/styles';

const newTheme = createTheme({
  palette: {
    text: {
      primary: '#0a0a23',
      secondary: '#000'
    },
    background: {
      default: '#121212',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      light: '#757ce8',
      main: '#571eb1',
      dark: '#2c2560',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#845EC2',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 'bold',
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase"
    }
  },
  
});

export default newTheme;
