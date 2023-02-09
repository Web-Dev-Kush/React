import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Heading1 with createElement"
);
const heading2 = React.createElement(
  "h2",
  { id: "title" },
  "Heading2 with createElement"
);
const heading3 = React.createElement(
  "h3",
  { id: "title" },
  "Heading3 with createElement"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
  heading3,
]);

const h1 = <h1>Heading 1 with JSX</h1>;
const h2 = <h2>Heading 2 with JSX</h2>;
const h3 = <h3>Heading 3 with JSX</h3>;
const newContainer = (
  <div class="title">
    {h1}
    {h2}
    {h3}
  </div>
);

const sampleHearList = React.createElement(
  "div",
  {
    id: "listContainer",
    key: "listHead",
  },
  [
    // create head-tag
    React.createElement(
      "ul",
      {
        id: "headerUl",
        key: "My-Header Section",
      },
      //create ul-tag
      // create list-tag
      [
        React.createElement(
          "li",
          {
            id: "tagLi",
            key: "About",
          },
          "About"
        ),
        React.createElement(
          "li",
          {
            id: "tagLi",
            key: "Home",
          },
          "Home"
        ),
        React.createElement(
          "li",
          {
            id: "tagLi",
            key: "Help",
          },
          "Help"
        ),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <div>
      {container}
      <Title />
      {newContainer}
      {sampleHearList}
    </div>
  );
};

root.render(<HeaderComponent />);
