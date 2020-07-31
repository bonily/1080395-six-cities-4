import * as React from "react";
import {ErrorTypes} from "../../const";

interface Props {
  selectedCity: string;
  error: string | number;
}

const MainEmpty: React.FunctionComponent<Props> = (props: Props) => {
  const {selectedCity, error} = props;
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          {error === ErrorTypes.NETWORK ?
            <b className="cities__status">Netwok connection failed</b> :
            <b className="cities__status">No places to stay available</b>
          }
          <p className="cities__status-description">We could not find any property availbale at the moment in {selectedCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};


export default MainEmpty;
