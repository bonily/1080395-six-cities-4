import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

class MapProperty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentOffer, offers} = this.props;

    const position = currentOffer.coords;
    const zoom = 12;

    const pin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
      style: {fill: `000000`}
    });

    const activePin = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
      style: {fill: `000000`}
    });

    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        zoomControl={true}
        style={{width: 1144, height: 579}}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />

        <Marker
          position={currentOffer.coords}
          icon={activePin}>
          <Popup>Curren offer</Popup>
        </Marker>

        {offers.map((offer) => {
          return (
            <Marker key={offer.id}
              position={offer.coords}
              icon={pin}>
              <Popup>
                Popup for any custom information.
              </Popup>
            </Marker>
          );
        })}
      </LeafletMap>
    );
  }
}


MapProperty.propTypes = {
  currentOffer: PropTypes.shape({
    coords: PropTypes.array.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        coords: PropTypes.array.isRequired,
      })
  ).isRequired,
};

export default MapProperty;