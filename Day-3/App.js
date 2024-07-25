import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"h1"},"Welcome to React!");
const elem = <span>Cross Side Scripting</span>;

const Title = () => (
<h1 className="h1">

    Welcome to React JSX!
    {elem}    
</h1>
);

const FunHeading = () => (
    <div className="container">
        <Title/>
    <h1 className="h1">Welcome to Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunHeading/>);
