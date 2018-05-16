import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class postsNew extends Component {

    render() {

        const { fields: { title, categories, content}, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        { title.error }
                    </div>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control"  {...categories} />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea  className="form-control" {...content} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const error = {};

    if(!values.title) {
        error.title = 'Enter A Title';
    }

    return error;
}

export default reduxForm({
    form: 'postsNewForm',
    fields: ['title', 'categories', 'content'], 
    validate
}, null, { createPost })(postsNew);