import React from "react";
import ReactDOM from "react-dom/client";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setresturantList] = useState([]);
  const [filteredresturant,setFilteredresturant] = useState([]);//copy of the state variable
  const [searchtext, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.640936&lng=77.281125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setresturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
     setFilteredresturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="searchtext">
          <input
            type="text"
            placeholder="search rest"
            value={searchtext}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="serachbtn"
            onClick={()=>{
              console.log(searchtext)
              const filterResturants = resturantList.filter((res)=>{
                  return res?.info?.name.toLowerCase().includes(searchtext.toLowerCase());
               
              });
              setFilteredresturant(filterResturants);
            }}  
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterLogic = resturantList.filter((res) => {
                console.log(res?.info?.avgRating)
                return res?.info?.avgRating > 4.2
              });
              console.log(filterLogic);
              setFilteredresturant(filterLogic);
            }}
          >
            Top rated Resturants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredresturant?.map((resturant) => (
          <ResturantCard key={resturant?.info.id} resData={resturant?.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
