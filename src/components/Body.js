import React from "react";
import ReactDOM from "react-dom/client";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button className="button">
          <search>Search</search>
        </button>
      </div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard
            key={resturant.card.card.info.id}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
