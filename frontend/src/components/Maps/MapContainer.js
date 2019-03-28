import React from "react";

import LocationsMap from "./LocationsMap";

export default class MapContainer extends React.Component {
  render() {
    return (
      <>
        <div className="allLocationsMap">
          <LocationsMap
            lat={this.props.lat}
            lng={this.props.lng}
            locations={this.props.locations}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDSDyPJfdOKPalmFHFbWfUO_UU3E5c1Trc&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `400px`, width: `400px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </>
    );
  }
}
