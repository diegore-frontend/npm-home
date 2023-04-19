import React from "react";
import ReactDOM from "react-dom";
import { Card, Movie } from "@mentor-io/npm-library-class";

import "./index.scss";

const App = () => (
<Card title="Card en Home">
  <div>Name: Home Page</div>
  <div>Language: JavaScript</div>
  <div className="movie-grid">
    <Movie
      label="4DX"
      movieTitle="Preventa"
      src="https://static.cinepolis.com/img/peliculas/41041/1/1/41041.jpg"
      variant="4dx"
    />
    <Movie
      label="Promociones"
      movieTitle="Movie 01"
      src="https://static.cinepolis.com/img/peliculas/41818/1/1/41818.jpg"
    />
  </div>
</Card>
);

ReactDOM.render(<App />, document.getElementById("app"));
