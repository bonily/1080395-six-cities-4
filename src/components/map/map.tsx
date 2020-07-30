import * as React from "react";
import * as leaflet from "leaflet";
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';
import {Offer, City} from "../../types";


interface Props {
  city: City,
  offers: Offer[],
  highlightedPinId: number,
};

class Map extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, highlightedPinId, city} = this.props;
    const highlightedOffer = offers.find((offer) => offer.id === highlightedPinId);

    const position = city.coords;
    const zoom = city.zoom;

    const customIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const activePin = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
      style: {fill: `000000`}
    });

    if(city) {
    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        zoomControl={true}
        style={{width: 512, height: 574}}
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
                {offer.title}
              </Popup>
            </Marker>
          );
        })}
        {highlightedPinId > -1 ?
          <Marker
            position={highlightedOffer.coords}
            icon={activePin}>
            <Popup>Current offer</Popup>
          </Marker> : ``
        }
      </LeafletMap>
    )} else {
        return null;
      }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.offers !== this.props.offers || nextProps.highlightedPinId !== this.props.highlightedPinId;
  }
}

export default Map;

