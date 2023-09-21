function SocialArticle(props) {
  const { author, likes, comments, content, channel, title } = props;

  //   ALIAS ....

  const { name: authorName, profileImage } = author;

  const { name: channelName, image } = channel;

  return (
    <div>
      <div className="article-container">
        <div className="article-header">
          <img src={profileImage} alt="author" className="author-image" />
          <div className="article-info">
            <h3>{title}</h3>
            <p>By: {authorName}</p>
          </div>
        </div>

        <div className="article-content">{content}</div>

        <div className="article-footer">
          <div className="article-channel">
            <img src={image} alt="channel" className="channel-image" />
            <p>Channel: {channelName}</p>
          </div>

          <div className="article-stats">
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialArticle;
