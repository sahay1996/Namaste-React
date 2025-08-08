import React from "react";
import ReactDOM from "react-dom/client";
import CDN_URL from "../utils/constants";
const ResturantCard = (props) => {
  const {resData} = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
  }=resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        src={
          {CDN_URL} +
          cloudinaryImageId
        }
        alt="A2B logo"
        className="res-logo"
      />
      <h3 className="res-card-heading">{name}</h3>
      <h4>{cuisines.join("-")}</h4>
      <h4>{avgRating}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;