import thunkMiddleware from "redux-thunk";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import peopleReducer from "./reducers/people";
import App from "./App";
import { createStore, applyMiddleware } from "redux";

const store = createStore(peopleReducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
