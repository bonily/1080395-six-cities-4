import React from "react";
import OfferList from "../offer-list/offer-list.jsx";

export const OfferListMain = (props) => {
  const className = `cities`;

  return (
    <OfferList className={className} {...props} />
  );
};

