import * as React from "react";
import OfferList from "../offer-list/offer-list";

export const OfferListNear = (props) => {
  const className = `near`;

  return (
    <OfferList nameClass={className} {...props} />
  );
};

