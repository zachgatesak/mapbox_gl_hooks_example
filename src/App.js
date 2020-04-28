import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css";

function App() {
  const [mapMeta, setMapMeta] = useState({ lng: 5, lat: 34, zoom: 2 });
  let mapContainer = null;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapMeta.lng, mapMeta.lat],
      zoom: mapMeta.zoom,
    });
    map.on("move", () => {
      setMapMeta({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="mapContainer" ref={(el) => (mapContainer = el)} />
    </div>
  );
}

export default App;
