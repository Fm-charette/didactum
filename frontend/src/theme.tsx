import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#55ffd6',
    },
    secondary: {
      main: '#19007b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
