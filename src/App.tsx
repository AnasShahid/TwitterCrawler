import { Provider } from "react-redux";
import MainContainer from "./example/dynamic-routing/Layout/AppContainer";
import { BrowserRouter as Route } from "react-router-dom";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Route>
        <MainContainer />
      </Route>
    </Provider>
  );
}

export default App;
