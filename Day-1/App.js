// const heading = React.createElement("h1", {id:"h1"}, "Welcome to React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, 
    [React.createElement("h1", { id: "h1" }, "Welcome to React!"), 
    React.createElement("h2", { id: "h2" }, "Alu....."),]),
    React.createElement("div", { id: "child" }, 
    [React.createElement("h1", { id: "h1" }, "Welcome to React!"), 
    React.createElement("h2", { id: "h2" }, "Alu....."),])],
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);