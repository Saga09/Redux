import { createStore, applyMiddleware } from 'redux';
import index from './reducer/index';
import userDetails from './reducer/userDetail';
import counterReducer from './reducer/counterReducer';
import { combineReducers } from 'redux';
import allUsersReducers from './reducer/allUser'


import thunk from 'redux-thunk';
let reducers = combineReducers({
    index: index,
    userDetails: userDetails,
    counterReducer : counterReducer,
    allUsersReducers: allUsersReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store