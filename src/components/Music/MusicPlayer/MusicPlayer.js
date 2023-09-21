import { useState } from "react";
import { FaHeart, FaPause, FaPlay, FaRegHeart } from "react-icons/fa";
import styles from "./MusicPlayer.module.css";

function MusicPlayer(props) {
  const { artist: aristList, title } = props;

  const isLoggedIn = true;
  const [isPlaying, setIsPlaying] = useState();

  const start = 0;
  const end = 100;

  const isFavSong = true;

  return (
    <section className={styles["music-player"]}>
      <img src={"asdasd"} alt="imag" height="30px" width="30px" />
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
          <audio
            controls
            src="https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf94e447ae38c3e33a7253.mp3"
          ></audio>

          {/* FAV SIGN */}
          <div
            className="heart-icon"
            onClick={() => console.log("fav clicked")}
          >
            {isFavSong ? <FaHeart /> : <FaRegHeart />}
          </div>
        </>
      ) : (
        <>
          <p>Please sign up first</p>

          <button onClick={() => {}}> SignUp here !! </button>
        </>
      )}
    </section>
  );
}

export default MusicPlayer;
