import * as types from './actionTypes'
import { auth } from '../services/firebase'

const registerStart = () => (
    {
        type: types.REGISTER_START
    }
)

const registerSuccess = (user) => (
    {
        type: types.REGISTER_SUCCESS,
        payload: user
    }
)

const registerError = (error) => (
    {
        type: types.REGISTER_ERROR,
        payload: error
    }
)

const loginStart = () => (
    {
        type: types.LOGIN_START
    }
)

const loginSuccess = (user) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
)

const loginError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
)

const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
)

const logoutSuccess = (user) => (
    {
        type: types.LOGOUT_SUCCESS
    }
)

const logoutError = (error) => (
    {
        type: types.LOGOUT_ERROR,
        payload: error
    }
)



export const logoutInit = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((error) => dispatch(logoutError(error)))
    }
}

export const loginInit = (email, pass) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, pass)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginError(error)))
    }
}

export const registerInit = (email, pass, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, pass)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error)))
    }
}