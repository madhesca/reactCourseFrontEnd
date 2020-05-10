import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

function ProfileFollow(props) {
  const { username } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPosts = async () => {
      try {
        const response = await Axios.get(`/profile/${username}/${props.followUrl}`, {
          cancelToken: ourRequest.token
        });
        setIsLoading(false);
        setPosts(response.data);
        console.log("PRofileFollow", response.data);
      } catch (ex) {
        console.log("Failed getting the posts");
      }
    };
    fetchPosts();

    return () => {
      ourRequest.cancel();
    };
  }, [username, props.followUrl]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div>
      <div className="list-group">
        {posts.map((follower, index) => {
          return (
            <Link to={`/profile/${follower.username}`} key={index} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={follower.avatar} /> {follower.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileFollow;
