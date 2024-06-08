import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
