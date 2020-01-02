import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";

import App from "./components/App";
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
