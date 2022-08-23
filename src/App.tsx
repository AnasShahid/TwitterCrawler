import "./App.css";
// import Example from "./example/counter";
// import Application from "./example/dynamic-routing/components/Application";
import TweetCard from "./components/tweet-card";
// import Counter from "./example/counter";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./example/theme/Colors";
import { MainLayout } from "./example/global-styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout />
        <div className="App">
          <TweetCard />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
