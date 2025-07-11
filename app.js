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

const ResturantCard = () => {
  return (
    <div className="res-card">
      
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/26/dc21d7cc-bdb1-4aa8-a5bf-30222cf54c55_1082750%20(1).jpg"
        alt="A2B logo" className="res-logo"
      />
      <h3 className="res-card-heading">A2B</h3>
      <h4>Cuisine:South Indian</h4>
      <h4>Star Rating:4.5 Stars</h4>
      <h4>ETA:38 minutes</h4>
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
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
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
