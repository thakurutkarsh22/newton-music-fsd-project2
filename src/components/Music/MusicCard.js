import styles from "./MusicCard.module.css";

function MusicCard(props) {
  const { title, image, artist } = props;

  return (
    <section className={styles.musicCard}>
      <img src={image} alt={title} className="bannerImg" />

      <div className={styles.musicCardTitle}>{title}</div>
      <div className={styles.artist}>{artist}</div>
    </section>
  );
}

export default MusicCard;
