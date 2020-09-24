import React from "react";
import "./moviecard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import { forwardRef } from "react";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

const MovieCard = forwardRef(({ movie }, ref) => {
  const [{ selectedMovie }, dispatch] = useStateValue();
  const history = useHistory();
  const baseImg = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="movieCard"
      onClick={() => {
        dispatch({
          type: "SELECT_MOVIE",
          movie: movie,
        });
        history.push("/play");
      }}
    >
      <img
        src={`${baseImg}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.name}
      />
      <div className="movieCard__description">
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <h3>{movie.original_title || movie.title || movie.original_name}</h3>
        <p className="movieCard__stats">
          {movie.media_type && `${movie.media_type} • `}
          {movie.release_date || movie.first_air_date}
          <p className="movieCard__statsAdult">
            <b>{movie.adult === true ? "18+" : "PG"}</b>
          </p>
          <p className="movieCard__statesAverage">
            Average Score: {movie.vote_average ? movie.vote_average : "n/a"}
          </p>
          <p className="movieCard__statsLike">
            <ThumbUpSharpIcon />
            {movie.vote_count}
          </p>
        </p>
      </div>
    </div>
  );
});

export default MovieCard;
