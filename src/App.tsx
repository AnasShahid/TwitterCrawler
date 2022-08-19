import "./App.css";
import Example from "./example/counter";
import { Provider } from "react-redux";
import store from "./store";
import Application from "./example/dynamic-routing/components/Application";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Application />
        <Example />
      </div>
    </Provider>
  );
}

export default App;
