import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    const position = [52.38333, 4.9];
    const zoom = 12;

    const customIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        zoomControl={true}
        style={{width: 512, height: 526}}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />

        {offers.map((offer) => {
          return (
            <Marker key={offer.id}
              position={offer.coords}
              icon={customIcon}>
              <Popup>
                {offer.price}
              </Popup>
            </Marker>
          );
        })}
      </LeafletMap>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        coords: PropTypes.array.isRequired,
      })
  ).isRequired,
};

export default Map;
