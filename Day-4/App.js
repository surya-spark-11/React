import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://programminginsider.com/wp-content/uploads/2021/02/food.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Address</li>
                    <li>Contact Number</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//One way of writing the CSS using JSX
// const Stylecard = {
//     backgroundColor: "#f0f0f0"
// }

const RestuarantCard = (props) =>{
    console.log(props);
    return(
        <div className="res-card" style={ {backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://s4.scoopwhoop.com/ach/biryani/11.jpg" alt="res-logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cusin}</h4>
            <h4>4.7 Stars</h4>
            <h4>45 minutes</h4>
        </div>
    );
};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard resName="SK Biriyani" cusin="SothIndian, Biriyani" />
                <RestuarantCard resName="KFC" cusin="Burger,Fast Food"/>
                <RestuarantCard resName="Thatha Biriyani" cusin="Indian, Biriyani"/>
            </div>
        </div>
    )
}




const App = () =>{
    return (
        <div className="app">
        <Header/>
        <Body/>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);