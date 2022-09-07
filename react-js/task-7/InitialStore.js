import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messagesReducer/messageReducer'
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';
 
const reducer = combineReducers ({
    chats: chatReducer,
    messgaes: messageReducer
})


//Задание 2 "Использовать библиотеку redux-logger"
const logger = createLogger({
    diff: true,
    predicate: true
})


//Задание 3 "Сохранять данные через redux-persist"
// const persistLog = {
//     key: 'root',
//     storage
// }

// const persisterReducer = persistReducer (persistLog, reducer)


//Задание 1 "Создать мидлвар c неким интервалом"
const timer = store => next => action => {
    const delay = action?.meta?.delay
    if (!delay) {
        return next(action)
    }

    const timeout = setTimeout (() => next(action), delay)

    return () => {
        clearTimeout (timeout)
    }
}


export const store = createStore(reducer, applyMiddleware(logger, timer))// persisterReducer
// export const persist = persistStore (store)