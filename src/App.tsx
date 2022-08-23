import "./App.css";
// import Example from "./example/counter";
import { Provider } from "react-redux";
import store from "./store";
// import Application from "./example/dynamic-routing/components/Application";
import TweetCard from "./components/tweet-card";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Application /> */}
        <TweetCard />
      </div>
    </Provider>
  );
}

export default App;
