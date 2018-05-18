import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        console.log(this.props.post);
        return <div> This is post { this.props.params.id } </div>
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
