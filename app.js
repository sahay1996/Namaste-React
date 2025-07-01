// const { Children } = require("react")

//     div id = parent
//         div id = Children1
//             <h1></h1>
//             <h2></h2>
//         div id = Children2
//             h1
//             h2

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childern1" }, [
    React.createElement("h1", { id: "heading1" }, "This is heading1 from heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is heading 2 from heading 2"),
  ]),
  React.createElement("div", { id: "childern2" }, [
    React.createElement("h1", { id: "heading1" }, "This is heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
