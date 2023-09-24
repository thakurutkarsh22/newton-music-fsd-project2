import { useMusic } from "../../../Providers/MusicProvider";
import styles from "./MusicCard.module.css";

function MusicCard(props) {
  // tell the context
  const setMusic = useMusic().setMusic;

  const { title, image = "", artist } = props;

  return (
    <section className={styles.musicCard} onClick={() => setMusic(props)}>
      <img src={image} alt={title} className={styles.bannerImg} />

      <div className={styles.musicCardTitle}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </section>
  );
}

export default MusicCard;
