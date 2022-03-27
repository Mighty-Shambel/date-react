import React from "react";
import ReactDom from "react-dom";
const currentDate = new Date(2022, 1, 1, 19);
const time = currentDate.getHours();

var customstyle = {
  color: ""
};
var greetings;
if (time < 6) {
  greetings = "Good Morning";
  customstyle.color = "red";
} else if (time < 12) {
  greetings = "Good Afternoon";
  customstyle.color = "green";
} else {
  greetings = "Good night";
  customstyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 style={customstyle}>{greetings}</h1>
  </div>,
  document.getElementById("root")
);
