import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";



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
