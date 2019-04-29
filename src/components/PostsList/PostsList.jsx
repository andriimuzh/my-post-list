import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import "./postList.css";
import T from "prop-types";

export default function PostsList({ posts }) {
  let postItems = posts.map(post => (
    <PostListItem key={post.id} title={post.title} body={post.body} />
  ));
  return !postItems.length ? (
    <h2 className="no-results">No such results...</h2>
  ) : (
    <ol> {postItems}</ol>
  );
}

PostsList.propTypes = {
  posts: T.array,
};
