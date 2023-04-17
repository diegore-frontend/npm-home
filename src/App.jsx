import React from "react";
import ReactDOM from "react-dom";

import "./index.scss"

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <div>Name: Home Page</div>
    <div>Language: JavaScript</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
