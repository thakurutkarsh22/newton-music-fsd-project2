import { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../../utils/configs";
import Loader from "../../components/Loader/Loader";
import MusicCard from "../../components/Music/MusciCard/MusicCard";
import styles from "./Home.module.css";
import axios from "axios";
import MusicPlayer from "../../components/Music/MusicPlayer/MusicPlayer";

function Home() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  // const projectcode = "8nbih316dv01"

  // UI blokcing task, this task is a side effect ?  YES : NO

  //   using the localstorage ...

  async function fetchMusic() {
    try {
      setLoading(true);
      const config = getHeaderWithProjectId();
      const url = "https://academics.newtonschool.co/api/v1/music/song";

      const axisResponse = await axios.get(url, config);
      const data = axisResponse.data;

      // const response = await fetch(
      //   "",
      //   config
      // );
      // const data = await response.json();
      setLoading(false);
      const { data: listOfMusic } = data;

      setMusicList(listOfMusic);
    } catch (error) {
      console.log("axios errror ");

      // i can show 404 not found beautiful screen
    }
  }

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <>
      "HOME"
      {loading && <Loader />}
      {/* TOOD:  */}
      <section className={styles["music-list-container"]}>
        {musicList.map((music, index) => {
          const { thumbnail, title, _id } = music;
          const artistArray = music.artist.map((artist) => artist.name);
          return (
            <div key={_id}>
              <MusicCard
                title={title}
                image={thumbnail}
                artist={artistArray.join(" & ")}
              />
            </div>
          );
        })}
      </section>
      <footer>
        <MusicPlayer title={"dummy title"} artist={"dummy artist"} />
      </footer>
    </>
  );
}

export default Home;
