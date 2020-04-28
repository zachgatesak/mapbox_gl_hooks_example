import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

mapboxgl.accessToken = process.env.REACT_APP_NOT_SECRET;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

serviceWorker.unregister();
