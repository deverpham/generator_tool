import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./sections/sidebar";
import Preview from "./sections/preview";
import "./styles.css";
import "./assets/style.scss";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Preview />
        <Sidebar />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
