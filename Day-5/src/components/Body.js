import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(resObj
    // {
    //   info: {
    //     id: "444322",
    //     name: "Domino's Pizza",
    //     cloudinaryImageId:
    //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/6b0e793f-ee8e-45dd-9747-244f13e86930_444322.jpg",
    //     locality: "Palladam Main Road",
    //     areaName: "Kattuvalavu",
    //     costForTwo: "₹400 for two",
    //     cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    //     avgRating: 3.5,
    //     parentId: "2456",
    //     avgRatingString: "4.2",
    //     totalRatingsString: "902",
    //     sla: {
    //       deliveryTime: 25,
    //       lastMileTravel: 4.3,
    //       serviceability: "SERVICEABLE",
    //       slaString: "20-25 mins",
    //       lastMileTravelString: "4.3 km",
    //       iconType: "ICON_TYPE_EMPTY",
    //     },
    //     availability: {
    //       nextCloseTime: "2024-09-23 23:00:00",
    //       opened: true,
    //     },
    //     badges: {
    //       imageBadges: [
    //         {
    //           imageId: "Rxawards/_CATEGORY-Pizza.png",
    //           description: "Delivery!",
    //         },
    //       ],
    //     },
    //     isOpen: true,
    //     type: "F",
    //     badgesV2: {
    //       entityBadges: {
    //         imageBased: {
    //           badgeObject: [
    //             {
    //               attributes: {
    //                 description: "Delivery!",
    //                 imageId: "Rxawards/_CATEGORY-Pizza.png",
    //               },
    //             },
    //           ],
    //         },
    //         textBased: {},
    //         textExtendedBadges: {},
    //       },
    //     },
    //     aggregatedDiscountInfoV3: {
    //       header: "20% OFF",
    //       subHeader: "UPTO ₹50",
    //     },
    //     loyaltyDiscoverPresentationInfo: {
    //       logoCtx: {
    //         logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
    //       },
    //       freedelMessage: "FREE DELIVERY",
    //       badgeType: "BADGE_TYPE_ONE_LITE",
    //     },
    //     differentiatedUi: {
    //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       differentiatedUiMediaDetails: {
    //         mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //         lottie: {},
    //         video: {},
    //       },
    //     },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     restaurantOfferPresentationInfo: {},
    //     externalRatings: {
    //       aggregatedRating: {
    //         rating: "--",
    //       },
    //     },
    //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    //   },
    //   analytics: {},
    //   cta: {
    //     link: "https://www.swiggy.com/city/tirupur/dominos-pizza-palladam-main-road-kattuvalavu-rest444322",
    //     type: "WEBLINK",
    //   },
    // },
    // {
    //   info: {
    //     id: "440678",
    //     name: "KFC",
    //     cloudinaryImageId:
    //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_440678.JPG",
    //     locality: "Kumar Nagar",
    //     areaName: "Tiruppur",
    //     costForTwo: "₹400 for two",
    //     cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    //     avgRating: 4.4,
    //     parentId: "547",
    //     avgRatingString: "4.4",
    //     totalRatingsString: "7.0K+",
    //     sla: {
    //       deliveryTime: 34,
    //       lastMileTravel: 6.6,
    //       serviceability: "SERVICEABLE",
    //       slaString: "30-35 mins",
    //       lastMileTravelString: "6.6 km",
    //       iconType: "ICON_TYPE_EMPTY",
    //     },
    //     availability: {
    //       nextCloseTime: "2024-09-23 23:00:00",
    //       opened: true,
    //     },
    //     badges: {
    //       imageBadges: [
    //         {
    //           imageId: "Rxawards/_CATEGORY-Burger.png",
    //           description: "Delivery!",
    //         },
    //       ],
    //     },
    //     isOpen: true,
    //     type: "F",
    //     badgesV2: {
    //       entityBadges: {
    //         imageBased: {
    //           badgeObject: [
    //             {
    //               attributes: {
    //                 description: "Delivery!",
    //                 imageId: "Rxawards/_CATEGORY-Burger.png",
    //               },
    //             },
    //           ],
    //         },
    //         textBased: {},
    //         textExtendedBadges: {},
    //       },
    //     },
    //     aggregatedDiscountInfoV3: {
    //       header: "40% OFF",
    //       subHeader: "UPTO ₹80",
    //     },
    //     loyaltyDiscoverPresentationInfo: {
    //       logoCtx: {
    //         logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
    //       },
    //       freedelMessage: "FREE DELIVERY",
    //       badgeType: "BADGE_TYPE_ONE_LITE",
    //     },
    //     differentiatedUi: {
    //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       differentiatedUiMediaDetails: {
    //         mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //         lottie: {},
    //         video: {},
    //       },
    //     },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     restaurantOfferPresentationInfo: {},
    //     externalRatings: {
    //       aggregatedRating: {
    //         rating: "--",
    //       },
    //     },
    //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    //   },
    //   analytics: {},
    //   cta: {
    //     link: "https://www.swiggy.com/city/tirupur/kfc-kumar-nagar-tiruppur-rest440678",
    //     type: "WEBLINK",
    //   },
    // },
    // {
    //   info: {
    //     id: "72463",
    //     name: "A2B - Adyar Ananda Bhavan",
    //     cloudinaryImageId: "etta6fmlshstip8nudzr",
    //     locality: "Karuvampalayam",
    //     areaName: "Tiruppur",
    //     costForTwo: "₹300 for two",
    //     cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
    //     avgRating: 4.6,
    //     veg: true,
    //     parentId: "22",
    //     avgRatingString: "4.6",
    //     totalRatingsString: "23K+",
    //     sla: {
    //       deliveryTime: 30,
    //       lastMileTravel: 4.3,
    //       serviceability: "SERVICEABLE",
    //       slaString: "30-35 mins",
    //       lastMileTravelString: "4.3 km",
    //       iconType: "ICON_TYPE_EMPTY",
    //     },
    //     availability: {
    //       nextCloseTime: "2024-09-23 22:45:00",
    //       opened: true,
    //     },
    //     badges: {
    //       imageBadges: [
    //         {
    //           imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    //           description: "OnlyOnSwiggy",
    //         },
    //         {
    //           imageId: "v1695133679/badges/Pure_Veg111.png",
    //           description: "pureveg",
    //         },
    //       ],
    //     },
    //     isOpen: true,
    //     type: "F",
    //     badgesV2: {
    //       entityBadges: {
    //         imageBased: {
    //           badgeObject: [
    //             {
    //               attributes: {
    //                 description: "OnlyOnSwiggy",
    //                 imageId:
    //                   "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    //               },
    //             },
    //             {
    //               attributes: {
    //                 description: "pureveg",
    //                 imageId: "v1695133679/badges/Pure_Veg111.png",
    //               },
    //             },
    //           ],
    //         },
    //         textBased: {},
    //         textExtendedBadges: {},
    //       },
    //     },
    //     aggregatedDiscountInfoV3: {
    //       header: "ITEMS",
    //       subHeader: "AT ₹189",
    //     },
    //     loyaltyDiscoverPresentationInfo: {
    //       logoCtx: {
    //         logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
    //       },
    //       freedelMessage: "FREE DELIVERY",
    //       badgeType: "BADGE_TYPE_ONE_LITE",
    //     },
    //     differentiatedUi: {
    //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       differentiatedUiMediaDetails: {
    //         mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //         lottie: {},
    //         video: {},
    //       },
    //     },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     restaurantOfferPresentationInfo: {},
    //     externalRatings: {
    //       aggregatedRating: {
    //         rating: "--",
    //       },
    //     },
    //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    //   },
    //   analytics: {},
    //   cta: {
    //     link: "https://www.swiggy.com/city/tirupur/a2b-adyar-ananda-bhavan-karuvampalayam-tiruppur-rest72463",
    //     type: "WEBLINK",
    //   },
    // },
  );

  return (
    <div className="body">
      <div className="filter">
        <button
          className="search"
          onClick={() => {
            const list = listofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistofRestaurant(list);
          }}
        >
          Top Rating Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
