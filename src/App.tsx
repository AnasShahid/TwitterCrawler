import "./App.css";
import Example from "./example/counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Example />
      </div>
    </Provider>
  );
}

export default App;
