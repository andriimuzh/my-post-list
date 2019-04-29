import React, { Component } from "react";
import PostsList from "./components/PostsList/PostsList";
import MoreButton from "./components/MoreButton/MoreButton";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      shownPostsNumber: 10,
      searchQuery: "",
      allPosts: [],
      shownPosts: [],
    };
    this.addMorePosts = this.addMorePosts.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
    this.addSearchQuery = this.addSearchQuery.bind(this);
  }

  addMorePosts() {
    if (this.state.allPosts.length > this.state.shownPostsNumber) {
      this.setState(prevState => ({
        shownPostsNumber: prevState.shownPostsNumber + 10,
      }));
    } else {
      this.setState(prevState => ({
        shownPostsNumber: prevState.allPosts.length,
      }));
    }
  }

  addSearchQuery({ target: { value } }) {
    this.setState({ searchQuery: value });
  }

  searchPosts() {
    const searchQuery = this.state.searchQuery.trim();
    const posts = this.state.allPosts.filter(
      post =>
        post.title.search(searchQuery) !== -1 ||
        post.title.search(searchQuery) !== -1
    );
    this.setState(prevState => ({ shownPosts: posts, shownPostsNumber: 10 }));
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(responce => responce.json())
      .then(allPosts =>
        this.setState(prevState => ({
          allPosts,
          isLoading: false,
          shownPosts: allPosts,
        }))
      );
  }

  render() {
    const { isLoading, searchQuery, shownPostsNumber, shownPosts } = this.state;
    const posts = shownPosts.slice(0, shownPostsNumber);
    if (isLoading) {
      return <h1 className="loader">Loading...</h1>;
    } else {
      return (
        <div>
          <SearchBar
            searchPosts={this.searchPosts}
            addSearchQuery={this.addSearchQuery}
            searchQuery={searchQuery}
          />
          <PostsList posts={posts} />
          {shownPosts.length >= 10 && (
            <MoreButton addMorePosts={this.addMorePosts} />
          )}
        </div>
      );
    }
  }
}

export default App;
