import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./StoreMap.css"; // Import the new CSS file

const MapComponent = () => {
  const coordinates = [29.5933171, -95.6065593]; // Your business location

  return (
    <div className="map-wrapper">
      <h2 className="map-title">Find Us</h2>
      <MapContainer center={coordinates} zoom={16} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}>
          <Popup>Heaven in a Jar</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
