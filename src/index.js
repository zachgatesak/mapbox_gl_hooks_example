import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Note, you'll need to place a file inside the root of your foloder named:
// `.env.local` that contains a line REACT_APP_NOT_SECRET=<your token here>
mapboxgl.accessToken = process.env.REACT_APP_NOT_SECRET;

ReactDOM.render(
  <React.StrictMode>
    zs
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

serviceWorker.unregister();
