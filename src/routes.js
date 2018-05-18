import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.js';
import postIndex from './components/posts_index.js';
import postsNew from './components/posts_new';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={postIndex} />
        <Route path="post/new" component={postsNew} />
        <Route path="post/:id" component={postsShow} />
    </Route>
);
