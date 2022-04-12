import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Main from "./Main";
import { Provider } from "react-redux";
import { setupState } from "./redux/reduxStore";

const store = setupState();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
