import React, { Component } from 'react';
import { connect } from 'react-redux'

class Category extends Component {
  render() {
    return (
      <div>
        <h1 key="1">Category</h1>
        <p key="2">This is the category page</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(Category);