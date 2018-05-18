import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div> 
                <div className="text-xs-right">
                    <Link to="/post/new" className="btn btn-primary">
                        Add post
                    </Link>
                </div>
                List of books to be displayed 
            </div>
         );
    }   
}

function mapStateToProps(state) {
    return { post: state.post.all }
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);