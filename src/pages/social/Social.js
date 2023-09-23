import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../../utils/configs";
import SocialArticle from "../../components/SocialCard/SocialArticles";

function Social() {
  const [postList, setPostList] = useState([]);

  async function fetchSocialPosts() {
    const config = getHeaderWithProjectId();
    const url = "https://academics.newtonschool.co/api/v1/quora/post?limit=100";
    const response = await axios(url, config);
    const data = response.data;

    const postList = data.data;

    setPostList(postList);

    console.log("data debiug Social", data);
  }

  useEffect(() => {
    fetchSocialPosts();
  }, []);

  return (
    <>
      {postList.map((post) => {
        const {
          _id,
          title,
          likeCount,
          content,
          commentCount,
          channel,
          author,
        } = post;
        return (
          <React.Fragment key={_id}>
            <SocialArticle
              key={_id}
              author={author}
              likes={likeCount}
              comments={commentCount}
              content={content}
              channel={channel}
              title={title}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Social;
