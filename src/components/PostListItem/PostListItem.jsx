import React, { Component } from "react";
import T from "prop-types";
import "./postListItem.css";

export default class PostListItem extends Component {
  shouldComponentUpdate({ title, body }) {
    return this.props.title !== title || this.props.body !== body;
  }
  render() {
    return (
      <li>
        <h3 className="title">{this.props.title}</h3>
        <p className="body">{this.props.body}</p>
      </li>
    );
  }
}

PostListItem.propTypes = {
  title: T.string,
  body: T.string,
};
