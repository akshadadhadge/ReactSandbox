import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hellooosup</h1>, document.getElementById("root")); //creates JSX files
//HTML IS PICKED UP BY COMPILER- COMPILED TO ACTUAL JS-> COMES FROM REACT
//BABEL IS JS COMPILER -- ABLE TO TAKE NEXT LEVEL OF JS

//SAME ABOVE CODE CAN BE WRITTEN IN PLAIN JS

var h1 = document.createElement("h1");
h1.innerHTML = "Helleloooo";
document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <a href="www.google.com">Google link</a>,
  document.getElementById("root")
);

var a = document.createElement("a");
var link = document.createTextNode("This is a link");
a.appendChild(link);
a.title = "Google";
a.href = "www.google.com";
document.getElementById("root").appendChild(a);

ReactDOM.render(
  <ul>
    This is another list<li>MICROWAVE</li>
  </ul>,
  document.getElementById("root")
);

var ul = document.createElement("ul");
ul.innerHTML = "This is a list";
var li1 = document.createElement("li");
li1.innerHTML = "milk";
var li2 = document.createElement("li");
li2.innerHTML = "tea";
ul.appendChild(li1);
ul.appendChild(li2);
document.getElementById("root").appendChild(ul);
