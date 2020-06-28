import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

export const OfferCardMain = (props) => {
  const className = `cities`;

  return (
    <OfferCard className={className} {...props} />
  );
};
