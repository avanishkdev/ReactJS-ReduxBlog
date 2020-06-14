import React, { Component } from "react";

import { connect } from "react-redux";
import {  fetchposts} from "../actions"


class PostList extends  Component {

  componentDidMount() {
   this.props.fetchposts();
  }

    render() {
        return (
            <div>
                PostList
            </div>
        );
    }
}

export default connect( null , { fetchposts })(PostList);