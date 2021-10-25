import { useContext } from 'react';
import { Component } from './components/Component/Component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './theme/Theme';
import { ColorModeContext, ColorModeProvider } from './context/ColorMode.context';
import { ColorModeSwitch } from './components/ColorModeSwitch/ColorModeSwitch';

export function Master() {
  const { isDarkTheme } = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ColorModeSwitch />
      <Component text="Boilerplate ReactJS + Styled Components">
        <p>Eric Frank Li</p>
      </Component>
    </ThemeProvider>
  );
}

export function App() {
  return (
    <ColorModeProvider>
      <Master />
    </ColorModeProvider>
  );
}
