import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class MarkerDisplay extends React.Component {

  state = {
    isOpen: false,
    activeMarker: {},
    selectedPlace: {}
  }

  render(){
    return(
        <>
        <Marker
          position={this.props.location}
        >
        </Marker>
        <Marker
          position={{lat: this.props.lat , lng: this.props.lng}}
        >
        </Marker>
        </>
    );
  }
}
