import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      Menu+resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

//   const {itemCards} =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card );
// console.log(itemCards);

const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards[3]?.card?.info;

console.log(itemCards);
// console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}Rating</h2>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>

      <ul>
      {/* {itemCards ? (
          itemCards.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <p>No items found.</p>
        )} */}
        <li>{itemCards.title}</li>
        {/* <li>{itemCards.carousel[1].title}</li>
        <li>{itemCards.carousel[2].title}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
