import * as React from "react";
import OfferList from "../offer-list/offer-list";

const OfferListMain = (props) => {
  const className = `cities`;

  return (
    <OfferList nameClass={className} {...props} />
  );
};

export default OfferListMain;
