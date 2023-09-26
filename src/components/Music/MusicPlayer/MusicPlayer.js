import { useState } from "react";
import { FaHeart, FaPause, FaPlay, FaRegHeart } from "react-icons/fa";
import styles from "./MusicPlayer.module.css";
import { useMusic } from "../../../Providers/MusicProvider";
import { useUser } from "../../../Providers/UserProvider";
import { useNavigate } from "react-router-dom";

function MusicPlayer(props) {
  const { token, isUserLoggedIn } = useUser();
  const isLoggedIn = isUserLoggedIn;

  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState();

  const start = 0;
  const end = 100;

  const [isFavSong, setIsFavSong] = useState(false);

  const selectedMusic = useMusic().selectedMusic;

  const audio_url = selectedMusic?.audio_url;
  const image = selectedMusic?.image;
  const title = selectedMusic?.title;
  const aristList = selectedMusic?.artist;
  const id = selectedMusic?.id;

  console.log(selectedMusic);

  function addToFavourites() {
    var myHeaders = new Headers();
    myHeaders.append("projectId", "8nbih316dv01");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      songId: id,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/music/favorites/like",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // TODO: utkarsh improve this .
        console.log("resilt fav", result);
        setIsFavSong(true);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <section className={styles["music-player"]}>
      <img src={image} alt="imag" height="30px" width="30px" />
      {isLoggedIn ? (
        <>
          {/* song info  */}
          <div className="song-info">
            <div className="song-info-title">{title}</div>
            <div className="artist-list">{aristList}</div>
          </div>

          {/* Play pause button */}
          <button
            className={styles["play-pause"]}
            onClick={() => setIsPlaying((old) => !old)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Start - end */}
          <div className="start">{start}</div>
          <div className="end">{end}</div>

          {/* Input type range and audio itself */}

          <input type="range" min={0} max={3} />
          <audio controls src={audio_url}></audio>

          {/* FAV SIGN */}
          <div className="heart-icon" onClick={() => addToFavourites()}>
            {isFavSong ? <FaHeart /> : <FaRegHeart />}
          </div>
        </>
      ) : (
        <>
          <p>Please sign up first</p>

          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            SignUp here !!{" "}
          </button>
        </>
      )}
    </section>
  );
}

export default MusicPlayer;
