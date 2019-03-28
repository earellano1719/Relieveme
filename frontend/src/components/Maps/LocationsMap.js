import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerDisplay from "./MarkerDisplay";


const LocationsMap = withScriptjs(withGoogleMap((props) =>{
  //map through props and pass it down
  const { locations } = props
  
  if (!locations){return null}
  let markers = locations.map((location) => {
    return <MarkerDisplay location={{lat: location.lat, lng: location.long}} />
  })                  
  return (
      <GoogleMap
        defaultZoom={12}
        center={ { lat:  40.7329992, lng: -73.9539064 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default LocationsMap;