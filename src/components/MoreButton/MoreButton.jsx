import React from "react";
import T from "prop-types";
import "./moreButton.css";

export default function MoreButton({ addMorePosts }) {
  return (
    <button className="moreBtn" onClick={addMorePosts}>
      More
    </button>
  );
}
MoreButton.propTypes = {
  addMorePosts: T.func,
};
