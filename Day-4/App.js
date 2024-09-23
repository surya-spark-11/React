import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/550x/72/7e/f7/727ef7286f28b289fd1188eefdd2b626.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Address</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styledCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log("resdata..........",props);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
    } = resData.info;

    return(
        <div className="res-card" style={ {backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="No-Logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+  cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(","+" ")}</h4>
            <h4>{avgRating} rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};

const resObj =[
        {
          "info": {
            "id": "444322",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/6b0e793f-ee8e-45dd-9747-244f13e86930_444322.jpg",
            "locality": "Palladam Main Road",
            "areaName": "Kattuvalavu",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "902",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/dominos-pizza-palladam-main-road-kattuvalavu-rest444322",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "440678",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_440678.JPG",
            "locality": "Kumar Nagar",
            "areaName": "Tiruppur",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4.4,
            "parentId": "547",
            "avgRatingString": "4.4",
            "totalRatingsString": "7.0K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/kfc-kumar-nagar-tiruppur-rest440678",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "72463",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "etta6fmlshstip8nudzr",
            "locality": "Karuvampalayam",
            "areaName": "Tiruppur",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Sweets",
              "Chinese"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "22",
            "avgRatingString": "4.6",
            "totalRatingsString": "23K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "OnlyOnSwiggy",
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹189"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/a2b-adyar-ananda-bhavan-karuvampalayam-tiruppur-rest72463",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "168103",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "pot3r7msxqbwftzf3jqj",
            "locality": "Valipalayam",
            "areaName": "Tiruppur",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "Barbecue",
              "South Indian",
              "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "332",
            "avgRatingString": "4.3",
            "totalRatingsString": "6.7K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 4.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-24 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/dindigul-thalappakatti-valipalayam-tiruppur-rest168103",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "619273",
            "name": "CakeZone Patisserie",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/d4491993-30b9-42c1-9db9-21a22b180050_619273.jpg",
            "locality": "Kavery Street",
            "areaName": "Laxmi Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Sweets",
              "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "7003",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.4K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/cakezone-patisserie-kavery-street-laxmi-nagar-rest619273",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "221610",
            "name": "Kannimara Family Restaurant",
            "cloudinaryImageId": "xd96hlmxnav0vfhyccns",
            "locality": "Veerapandi",
            "areaName": "Tiruppur",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "Grill",
              "Chettinad"
            ],
            "avgRating": 4.3,
            "parentId": "8855",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.9K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/kannimara-family-restaurant-veerapandi-tiruppur-rest221610",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "86981",
            "name": "Aththa Biriyani",
            "cloudinaryImageId": "ekpzwdzcmcnicgtnqqq2",
            "locality": "Valliammai Nagar",
            "areaName": "Kangayam Rd",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Biryani",
              "Tandoor",
              "Chettinad"
            ],
            "avgRating": 4.4,
            "parentId": "18313",
            "avgRatingString": "4.4",
            "totalRatingsString": "29K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 6.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "6.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-24 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/aththa-biriyani-valliammai-nagar-kangayam-rd-rest86981",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "350171",
            "name": "A1 Biriyani Godown",
            "cloudinaryImageId": "xggsklayjvtncso3kyfn",
            "locality": "Rayapuram",
            "areaName": "Odakkadu",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "Chinese",
              "Grill",
              "Continental"
            ],
            "avgRating": 4.3,
            "parentId": "25035",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.6K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 5.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "5.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/a1-biriyani-godown-rayapuram-odakkadu-rest350171",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "243653",
            "name": "Four Monkeys",
            "cloudinaryImageId": "mzg7vpq46lbpdpdntdzb",
            "locality": "Kumar Nagar",
            "areaName": "College Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Continental",
              "Chinese",
              "Grill"
            ],
            "avgRating": 4.6,
            "parentId": "9599",
            "avgRatingString": "4.6",
            "totalRatingsString": "7.4K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Chinese.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Chinese.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/four-monkeys-kumar-nagar-college-road-rest243653",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "226592",
            "name": "Dindigul Sri Alagappa Briyani",
            "cloudinaryImageId": "jqyy6ya2rabczexfwkzm",
            "locality": "PN Road",
            "areaName": "Kamaraj Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "South Indian",
              "Continental"
            ],
            "avgRating": 4.6,
            "parentId": "18072",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 6.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "OnlyOnSwiggy",
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/dindigul-sri-alagappa-briyani-pn-road-kamaraj-nagar-rest226592",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "489745",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_489745.JPG",
            "locality": "Kumar Nagar",
            "areaName": "Tiruppur",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Fast Food",
              "Salads"
            ],
            "avgRating": 4.4,
            "parentId": "2",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 52,
              "lastMileTravel": 8.7,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "8.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/subway-kumar-nagar-tiruppur-rest489745",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "89895",
            "name": "Bismi Biriyani Center",
            "cloudinaryImageId": "rhpefjaehvcwnfzgu199",
            "locality": "Valliammai Nagar",
            "areaName": "Kangayam Cross Road",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Chinese",
              "North Indian",
              "Biryani"
            ],
            "avgRating": 4.4,
            "parentId": "6963",
            "avgRatingString": "4.4",
            "totalRatingsString": "9.9K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 6.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:58:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/bismi-biriyani-center-valliammai-nagar-kangayam-cross-road-rest89895",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "72467",
            "name": "AXN Briyani Center",
            "cloudinaryImageId": "lsr5rppj8fbj4pb32fme",
            "locality": "Valliammai Nagar",
            "areaName": "Tiruppur",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "Chinese"
            ],
            "avgRating": 4.5,
            "parentId": "10194",
            "avgRatingString": "4.5",
            "totalRatingsString": "33K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 6.5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Biryani.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/axn-briyani-center-valliammai-nagar-tiruppur-rest72467",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "450818",
            "name": "Heat Square",
            "cloudinaryImageId": "6844d2875e8e5f93032f51040f655f38",
            "locality": "Karuvampalayam",
            "areaName": "Tiruppur",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Continental",
              "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "385146",
            "avgRatingString": "4.3",
            "totalRatingsString": "6.0K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/heat-square-karuvampalayam-tiruppur-rest450818",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "625990",
            "name": "Boomerang",
            "cloudinaryImageId": "flxkmcjrtry4slg8fewo",
            "locality": "Kamaraj Road",
            "areaName": "Karuvampalayam",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "4784",
            "avgRatingString": "4.4",
            "totalRatingsString": "165",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/boomerang-kamaraj-road-karuvampalayam-rest625990",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "629400",
            "name": "Dum Safar Biryani",
            "cloudinaryImageId": "47eee43e59a6d49b0f6d9a2b0e523f47",
            "locality": "Municipal Office Road",
            "areaName": "Noyyal",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Kebabs",
              "Tandoor",
              "Indian",
              "Desserts"
            ],
            "avgRating": 3.8,
            "parentId": "351013",
            "avgRatingString": "3.8",
            "totalRatingsString": "197",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 4.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/dum-safar-biryani-municipal-office-road-noyyal-rest629400",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "402126",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Valipalayam",
            "areaName": "Tiruppur",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 3.7,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "3.7",
            "totalRatingsString": "96",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 5.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-24 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/baskin-robbins-ice-cream-desserts-valipalayam-tiruppur-rest402126",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "85678",
            "name": "Swaad Manthra",
            "cloudinaryImageId": "ddrp9b9lrvoztv4srp3s",
            "locality": "Rayapuram",
            "areaName": "Tiruppur",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "North Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "9512",
            "avgRatingString": "4.4",
            "totalRatingsString": "3.4K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 22:25:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/swaad-manthra-rayapuram-tiruppur-rest85678",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "71333",
            "name": "Ibaco",
            "cloudinaryImageId": "simawwzdxveermgqjftg",
            "locality": "Valliammai Nagar",
            "areaName": "Tiruppur",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "3481",
            "avgRatingString": "4.6",
            "totalRatingsString": "2.4K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 4.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/ibaco-valliammai-nagar-tiruppur-rest71333",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "613166",
            "name": "Sree Saravana Bhavan",
            "cloudinaryImageId": "nvxbtcmc2eqruhljkjxo",
            "locality": "New Market Street",
            "areaName": "South Tirupur",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "193221",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.3K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-23 21:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
              },
              "freedelMessage": "FREE DELIVERY",
              "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/city/tirupur/sree-saravana-bhavan-new-market-street-south-tirupur-rest613166",
            "type": "WEBLINK"
          }
        }
];

const Body =() =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                 {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
            </div>

        </div>
    )
};

const AppLayout = () => (
  <div className="container">
    <Header />
    <Body/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
