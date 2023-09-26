import { useEffect, useState } from "react";
import { useUser } from "../../Providers/UserProvider";
import MusicCard from "../../components/Music/MusciCard/MusicCard";
import { MusicProvider } from "../../Providers/MusicProvider";

function Library() {
  const [favSongList, setFavSongList] = useState([]);

  const { isUserLoggedIn, token } = useUser();

  async function fetchFavSongs() {
    var myHeaders = new Headers();
    myHeaders.append("projectId", "8nbih316dv01");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/music/favorites/like",
      requestOptions
    );
    const data = await response.json();

    const listOfFavSongs = data.data.songs;
    setFavSongList(listOfFavSongs);

    console.log(data);
  }

  async function removeFavSong(songId) {
    var myHeaders = new Headers();
    myHeaders.append("projectId", "8nbih316dv01");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const bodyObj = JSON.stringify({ songId });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: bodyObj,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/music/favorites/like",
        requestOptions
      );
      const data = await response.json();

      const listOfFavSongs = data.data.songs;
      setFavSongList(listOfFavSongs);
    } catch (error) {
      // beautiful UI
      alert("delete uncessfull try this again ");
    }
  }

  // api call , localStorage ,,

  useEffect(() => {
    fetchFavSongs();
  }, []);

  return (
    <MusicProvider>
      <h1>Libary !!!</h1>
      {favSongList.length &&
        favSongList?.map((music) => {
          console.log("music debug", music);
          const { thumbnail, title, _id, audio_url } = music;
          const artistArray = music?.artist?.map((artist) => artist.name);
          return (
            <div key={_id}>
              <MusicCard
                title={title}
                audio_url={audio_url}
                image={thumbnail}
                artist={artistArray?.join(" & ")}
                id={_id}
              />

              <button onClick={() => removeFavSong(_id)}>X</button>
            </div>
          );
        })}
    </MusicProvider>
  );
}

export default Library;
