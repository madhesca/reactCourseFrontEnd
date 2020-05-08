import React, { useState, useEffect } from "react";
import Page from "./Page";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import ReactMarkdown from "react-markdown";
import ReactToolTip from "react-tooltip";

function ViewSinglePost() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await Axios.get(`/post/${id}`, {
          cancelToken: ourRequest.token,
        });
        setPost(response.data);
        setIsLoading(false);
      } catch (ex) {
        console.log("Error while tring to view single post");
      }
    };
    fetchData();

    return () => {
      ourRequest.cancel();
    };
  }, []);

  if (isLoading)
    return (
      <Page title="...">
        <LoadingDotsIcon />
      </Page>
    );

  const date = new Date(post.createdDate);

  const formattedDate = `${
    date.getMonth() + 1
  } / ${date.getDate()}/ ${date.getFullYear()}`;

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <Link
            to={`/post/${post._id}/edit`}
            data-tip="Edit"
            data-for="edit"
            className="text-primary mr-2"
          >
            <i className="fas fa-edit"></i>
          </Link>
          <ReactToolTip id="edit" className="custom-tooltip" />{" "}
          <a
            data-tip="Delete"
            data-for="delete"
            className="delete-post-button text-danger"
          >
            <i className="fas fa-trash"></i>
          </a>
          <ReactToolTip id="delete" className="custom-delete" />
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}/post`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by{" "}
        <Link to={`/profile/${post.author.username}`}>
          {post.author.username}
        </Link>{" "}
        on
        {formattedDate}
      </p>

      <div className="body-content">
        <p>{<ReactMarkdown source={post.body} />}</p>
      </div>
    </Page>
  );
}

export default ViewSinglePost;
