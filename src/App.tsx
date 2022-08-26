import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import TweetCard from "./components/tweet-card";
import Counter from "./example/counter";
import { MainLayout } from "./example/global-styles";
import theme from "./example/theme/Colors";
import store from "./store";
import tweet from "./__mock__/tweet.json";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout />
        <div className="App">
          <Counter />
          <TweetCard tweet={tweet.data} user={tweet.user} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
