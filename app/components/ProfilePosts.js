import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Post from "./Post";

function ProfilePosts() {
  const { username } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPosts = async () => {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, {
          cancelToken: ourRequest.token
        });
        setIsLoading(false);
        setPosts(response.data);
      } catch (ex) {
        console.log("Failed getting the posts");
      }
    };
    fetchPosts();

    return () => {
      ourRequest.cancel();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div>
      <div className="list-group">
        {posts.map(post => {
          return <Post key={post._id} noAuthor={true} post={post} id={post._id} />;
        })}
      </div>
    </div>
  );
}

export default ProfilePosts;
