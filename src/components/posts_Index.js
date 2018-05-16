import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div> List of books to be displayed </div>
         );
    }   
}



export default connect(null, { fetchPosts })(PostsIndex);