import React from "react";
import "./nav.css";
import requests from "./requests";

function Nav({ setMovieCategory }) {
  return (
    <nav>
      <h2 onClick={() => setMovieCategory(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setMovieCategory(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchScifi)}>Sci-Fi</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setMovieCategory(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setMovieCategory(requests.fetchTV)}>TV</h2>
    </nav>
  );
}

export default Nav;
