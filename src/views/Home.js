import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

class Home extends Component {
  componentWillMount () {
    this.props.fetchData()
  }
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
  posts: state.receivePosts
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);