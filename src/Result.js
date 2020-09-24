import React from "react";
import "./result.css";
import MovieCard from "./MovieCard";
import axios from "./axios";
import { useState } from "react";
import { useEffect } from "react";
import FlipMove from "react-flip-move";

function Result({ movieCategory }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(movieCategory);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [movieCategory]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
