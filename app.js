import React from "react";
import ReactDOM from "react-dom/client";
const value =
  "data:image/png;base64,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";
const Header = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img src={value} alt="Logo of the app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "15671",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "R Block",
          areaName: "Shakarpur",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.4,
          parentId: "1803",
          avgRatingString: "4.4",
          totalRatingsString: "21K+",
          promoted: true,
          adTrackingId:
            "cid=31795778~p=0~adgrpid=31795778#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=15671~plpr=COLLECTION~eid=7bb2d1ea-1da1-43e6-9853-5b49eb6f5a83~srvts=1754598302422~collid=83645",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31795778",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=15671&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "157799",
          name: "The Good Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/e202dffc-3c7f-4df4-881f-ffd702912a2c_157799.jpg",
          locality: "Laxmi Nagar",
          areaName: "Shakarpur",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
          avgRating: 4.4,
          parentId: "7918",
          avgRatingString: "4.4",
          totalRatingsString: "3.4K+",
          promoted: true,
          adTrackingId:
            "cid=31795758~p=1~adgrpid=31795758#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=157799~plpr=COLLECTION~eid=a801092f-a788-4d54-a78c-413e61c3fe28~srvts=1754598302422~collid=83645",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31795758",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=157799&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "62881",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/a988c8d6-9e8e-4434-a3a8-619951868725_62881.jpg",
          locality: "R Block",
          areaName: "Vikas Marg, Block R",
          costForTwo: "₹200 for two",
          cuisines: ["Thalis", "North Indian", "Biryani"],
          avgRating: 4.3,
          parentId: "4925",
          avgRatingString: "4.3",
          totalRatingsString: "12K+",
          promoted: true,
          adTrackingId:
            "cid=31795770~p=2~adgrpid=31795770#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=62881~plpr=COLLECTION~eid=4c7998a6-7dcd-4eca-8736-e825a17b3edb~srvts=1754598302422~collid=83645",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31795770",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=62881&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "263577",
          name: "Shravan Specials by Lunchbox",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/11/d71dc195-77da-4b6b-9c6c-1cabe1b737fc_263577.JPG",
          locality: "R Block",
          areaName: "Vikas Marg, Block R",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
          avgRating: 4.3,
          veg: true,
          parentId: "21938",
          avgRatingString: "4.3",
          totalRatingsString: "614",
          promoted: true,
          adTrackingId:
            "cid=31795772~p=11~adgrpid=31795772#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=263577~plpr=COLLECTION~eid=3ad1fd29-3233-4e75-8d0c-b095e53b309a~srvts=1754598302422~collid=83645",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31795772",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=263577&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "574983",
          name: "Veg Darbar by Behrouz Biryani",
          cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
          locality: "R Block",
          areaName: "Laxmi Nagar",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "344904",
          avgRatingString: "4.4",
          totalRatingsString: "90",
          promoted: true,
          adTrackingId:
            "cid=31795757~p=14~adgrpid=31795757#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=574983~plpr=COLLECTION~eid=da0c9c0b-483e-43e9-add4-746e105af958~srvts=1754598302422~collid=83645",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹229",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31795757",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=574983&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "57469",
          name: "Nazeer Foods",
          cloudinaryImageId: "6aa38b251b1ee1662961a6dc19e41e95",
          locality: "Laxmi Nagar",
          areaName: "Laxmi Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian", "Biryani", "Mughlai", "Snacks"],
          avgRating: 4,
          parentId: "2351",
          avgRatingString: "4.0",
          totalRatingsString: "7.7K+",
          promoted: true,
          adTrackingId:
            "cid=76795d47-4c5c-4d0d-a0b0-8fc5414ec10e~p=27~adgrpid=76795d47-4c5c-4d0d-a0b0-8fc5414ec10e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=57469~plpr=COLLECTION~eid=67b5fe7b-8730-47ee-8e0a-8f078d2b9af3~srvts=1754598302423~collid=83645",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹70",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "984",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "76795d47-4c5c-4d0d-a0b0-8fc5414ec10e",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=57469&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "874266",
          name: "Quick Crave",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/2/9bf4d292-2d0b-4fb3-955f-9618c6f32d22_874266.jpg",
          locality: "Gandhi Market Area",
          areaName: "Connaught Place",
          costForTwo: "₹200 for two",
          cuisines: ["Pizzas", "Fast Food"],
          avgRating: 4.1,
          parentId: "478149",
          avgRatingString: "4.1",
          totalRatingsString: "17",
          promoted: true,
          adTrackingId:
            "cid=74a257cf-fce6-4fb9-8d08-e2550de080c0~p=30~adgrpid=74a257cf-fce6-4fb9-8d08-e2550de080c0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=874266~plpr=COLLECTION~eid=75094085-7e56-4bb6-82f9-7249fd584e9d~srvts=1754598302423~collid=83645",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-08 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "OnlyOnSwiggy",
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "74a257cf-fce6-4fb9-8d08-e2550de080c0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=874266&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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
        {
          resList.map((resturant)=>
          <ResturantCard resData={resturant}/>)
        }
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div id="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
