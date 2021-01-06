import React from "react";
import ReactDOM from "react-dom";
import AppleBasket from "./components/AppleBasket";
import { Provider } from "mobx-react";
import AppStore from "./stores/apple";

ReactDOM.render(
  <Provider store={AppStore}>
    <AppleBasket />
  </Provider>,
  document.getElementById("root")
);
