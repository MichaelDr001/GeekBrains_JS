import {createStore, applyMiddleware} from 'redux'
import { postsReducer } from './postsReducer/postsReducer'
import thunk from 'redux-thunk'


export const store = createStore (postsReducer, applyMiddleware (thunk))