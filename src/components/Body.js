import React from "react";
import ReactDOM from "react-dom/client";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";


const Body = () => {
  const [resturantList,setresturantList]=useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" 
        onClick={()=>{
          const filterLogic = resturantList.filter((res)=>{
            return res.card.card.info.avgRating>4.2;
          })
          console.log(filterLogic)
          setresturantList(filterLogic)
        }}
        >
          Top rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resturantList.map((resturant) => (
          <ResturantCard
            key={resturant.card.card.info.id}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
