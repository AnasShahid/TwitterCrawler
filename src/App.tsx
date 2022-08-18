import "./App.css";
import Example from "./example/counter";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./example/theme/Colors";
import { GlobalStyle } from "./example/global-styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Example />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
