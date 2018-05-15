import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.js';
import postIndex from './components/posts_index.js';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={postIndex} />
    </Route>
);
