import React, { Component } from 'react';
import { connect } from 'react-redux'

class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1 key="1">Post Detail</h1>
        <p key="2">This is the post detail page</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(PostDetail);