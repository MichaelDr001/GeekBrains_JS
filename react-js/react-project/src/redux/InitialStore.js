import {createStore, combineReducers} from 'redux';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messagesReducer/messageReducer'
 
const reducer = combineReducers ({
    chats: chatReducer,
    messgaes: messageReducer
})


export const store = createStore(reducer)