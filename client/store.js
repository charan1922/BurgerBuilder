import React from 'react'

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import reducers
import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
}

 store = createStore(rootReducer, defaultState );
export const history = syncHistoryWithStore(browserHistory);

export default store;
