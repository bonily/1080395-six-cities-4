import * as React from "react";
import * as leaflet from "leaflet";
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';
import {Offer} from "../../types";


interface Props {
  offers: Offer[];
  currentOffer: Offer;
}


const MapProperty: React.FunctionComponent<Props> = (props: Props) => {
  const {currentOffer, offers} = props;

  const position = currentOffer.coords;
  const zoom = currentOffer.city.zoom;

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
    </LeafletMap>
  );
};

export default MapProperty;
