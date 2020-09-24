import React, { useEffect } from "react";
import movieTrailer from "movie-trailer";
import "./player.css";
import { useState } from "react";
import YouTube from "react-youtube";
import { useStateValue } from "./StateProvider";

function Player() {
  const [trailer, setTrailer] = useState(null);
  const [{ selectedMovie }, dispatch] = useStateValue();

  useEffect(() => {
    movieTrailer(
      selectedMovie.original_title ||
        selectedMovie.title ||
        selectedMovie.original_name ||
        ""
    ).then((url) => {
      const urlParam = new URLSearchParams(new URL(url).search);
      setTrailer(urlParam.get("v"));
    });
  }, []);

  const opts = {
    // height: "600",
    // width: "900",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="player">
      {selectedMovie ? (
        trailer ? (
          <div className="youtube-player">
            <YouTube videoId={trailer} opts={opts} />
          </div>
        ) : (
          <YouTube videoId={trailer} opts={opts} />
        )
      ) : (
        <h1 className="header">Access Denied</h1>
      )}
      {console.log(selectedMovie)}
      {/* <h1 className="heading">
        {selectedMovie.original_title ||
          selectedMovie.title ||
          selectedMovie.original_name}
      </h1>*/}
    </div>
  );
}

export default Player;
