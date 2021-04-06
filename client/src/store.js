import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './redusers/index'

const initialState = {};

const middlewares =[thunk];

const store = createStore(rootReduser , initialState, compose(applyMiddleware(...middlewares)));

export default store;