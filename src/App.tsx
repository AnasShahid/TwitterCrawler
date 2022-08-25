import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Counter from "./example/counter";
import { MainLayout } from "./example/global-styles";
import theme from "./example/theme/Colors";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout />
        <div className="App">
          <Counter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
