import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 key="1">Home</h1>
        <p key="2">This is the home page</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(Home);