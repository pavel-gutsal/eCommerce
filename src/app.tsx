import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom'; // change for hash
import { ThemeProvider } from 'styled-components';
import { MUIThemeProvider } from './MUIThemeProvider';
import { RouterContainer } from './navigation/RouterContainer';
import { theme } from './Theme/Theme';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <RouterContainer />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </BrowserRouter>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};