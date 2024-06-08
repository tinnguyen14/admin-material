import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const primary = {
  lighter: '#D0D0D0', // Changed to gray
  light: '#A0A0A0', // Changed to gray
  main: '#707070', // Changed to gray
  dark: '#505050', // Changed to gray
  darker: '#303030', // Changed to gray
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#D0ECFE', // Moved from primary
  light: '#73BAFB', // Moved from primary
  main: '#1877F2', // Moved from primary
  dark: '#0C44AE', // Moved from primary
  darker: '#042174', // Moved from primary
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#B7070A',
  dark: '#B71D18',
  contrastText: '#FFFFFF',
};

const theme = createTheme({
  palette: {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
  },
});

export default theme;
