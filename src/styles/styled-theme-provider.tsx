import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

interface Props {
  children?: ReactNode;
}

export const StyledThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
