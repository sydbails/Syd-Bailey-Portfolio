import React, { Component } from "react";
import BlogLoading from "../containers/BlogLoading";
import BlogContainer from "../containers/BlogContainer";
import { Header } from "semantic-ui-react";
import _ from "lodash";

export default class BlogSnippet extends Component {
  constructor() {
    super();

    this.state = {};
  }
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sydbails%2F"
    )
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ blogs: resp.items });
      });
  }

  stripHtml = html => {
    let temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  };

  render() {
    return (
      <div id="mainpage">
        <Header
          style={{
            fontFamily: "Verdana",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "2%"
          }}
        >
          <b>Syd's Blog</b>
        </Header>

        {_.isEmpty(this.state.blogs) ? (
          <BlogLoading />
        ) : (
          <BlogContainer blogs={this.state.blogs} stripHtml={this.stripHtml} />
        )}
      </div>
    );
  }
}
