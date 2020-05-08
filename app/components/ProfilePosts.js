import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

function ProfilePosts() {
  const { username } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPosts = async () => {
      try {
        const response = await Axios.get(`/profile/${username}/posts`, {
          cancelToken: ourRequest.token,
        });
        setIsLoading(false);
        setPosts(response.data);
        console.log(response.data);
      } catch (ex) {
        console.log("Failed getting the posts");
      }
    };
    fetchPosts();

    return () => {
      ourRequest.cancel();
    };
  }, []);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div>
      <div className="list-group">
        {posts.map((post) => {
          const date = new Date(post.createdDate);

          const formattedDate = `${
            date.getMonth() + 1
          } / ${date.getDate()}/ ${date.getFullYear()}`;

          return (
            <Link
              to={`/post/${post._id}`}
              key={post._id}
              className="list-group-item list-group-item-action"
            >
              <img className="avatar-tiny" src={post.author.avatar} />
              <strong>{post.title}</strong>{" "}
              <span className="text-muted small">on {formattedDate} </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilePosts;
