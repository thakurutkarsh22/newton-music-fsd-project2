import { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../../utils/configs";
import Loader from "../../components/Loader/Loader";

function Home() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(musicList);

  // const projectcode = "8nbih316dv01"

  // UI blokcing task, this task is a side effect ?  YES : NO

  //   using the localstorage ...

  async function fetchMusic() {
    setLoading(true);
    const config = getHeaderWithProjectId();
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/music/song",
      config
    );
    const data = await response.json();
    setLoading(false);
    const { data: listOfMusic } = data;

    setMusicList(listOfMusic);
  }

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <>
      "HOME"
      {loading && <Loader />}
      {/* TOOD:  */}
      {/* {!loading && musicList} */}
    </>
  );
}

export default Home;
