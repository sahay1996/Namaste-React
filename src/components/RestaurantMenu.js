import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_URL } from "../utils/constants";
const RestaturntMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.640936&lng=77.281125&restaurantId=1014776&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data);
    setResinfo(json?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating, city } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menus">
      <h1>{name}</h1>
      <h2>Menus</h2>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.price / 100}
          </li>
        ))}
        <li>Cuisines :{cuisines.join(",")}</li>
        <li>Rating: {avgRating}</li>
        <li>City-Name: {city}</li>
      </ul>
    </div>
  );
};
export default RestaturntMenu;
