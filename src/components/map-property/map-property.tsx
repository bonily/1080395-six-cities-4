import * as React from "react";
import * as leaflet from "leaflet";
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';
import {Offer} from "../../types";


interface Props {
  offers: Offer[];
  highlightedPinId: number;
  currentOffer: Offer;
}


class MapProperty extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentOffer, offers, highlightedPinId} = this.props;
    const highlightedOffer = offers.find((offer) => offer.id === highlightedPinId);

    const position = currentOffer.coords;
    const zoom = 12;

    const pin = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
      style: {fill: `000000`}
    });

    const activePin = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
      style: {fill: `000000`}
    });

    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        zoomControl={true}
        style={{width: 1144, height: 579, marginLeft: `auto`, marginRight: `auto`}}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />

        <Marker
          position={currentOffer.coords}
          icon={activePin}>
          <Popup>Current offer</Popup>
        </Marker>

        {offers.map((offer) => {
          return (
            <Marker key={offer.id}
              position={offer.coords}
              icon={pin}>
              <Popup>
                {offer.title}
              </Popup>
            </Marker>
          );
        })}
        {highlightedPinId !== currentOffer.id && highlightedPinId > -1 ?
          <Marker
            position={highlightedOffer.coords}
            icon={activePin}>
            <Popup>Current offer</Popup>
          </Marker> : ``
        }
      </LeafletMap>
    );
  }
}

export default MapProperty;
