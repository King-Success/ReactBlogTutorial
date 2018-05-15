import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.js';

const greetings = () => {
    return (
        <div> 
            Hey there!
        </div>
    );
};

export default (
    <Route path="/" component={App}>
        <Route path="greetings" component={greetings} />
    </Route>
);
