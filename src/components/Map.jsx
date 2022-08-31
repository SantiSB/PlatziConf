import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const APIKey = 'AIzaSyCzS-Li4rWNUSckhv6fp50lw0YiX-Dspso'

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }


  const defaultCenter = {
    lat: data.lat, lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey={APIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;