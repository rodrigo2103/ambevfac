
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const pin = "https://maps.google.com/mapfiles/kml/paddle/red-circle.png"

const googleAPIKey = "AIzaSyCzzIWyNZ0qdleYZ7aQz3ITETM0KO5ReBw";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "100%",
  transform: "translate(-50%, -100%)"
};


const MapExample = ({ center, zoom, data }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleAPIKey }}
      yesIWantToUseGoogleMapApiInternals={true}
      defaultZoom={zoom}
      defaultCenter={center}
    >
      {data.map(item => {
        return (
          <div lat={item.address[0]} lng={item.address[1]}>
            <img style={markerStyle} src={pin} alt="pin" />
          </div>
        );
      })}
    </GoogleMapReact>
  );
};

export default MapExample;
