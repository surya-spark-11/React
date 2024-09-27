import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const styledCard = {
//     backgroundColor: "#f0f0f0"
// }







const AppLayout = () => (
  <div className="container">
    <Header />
    <Body/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
