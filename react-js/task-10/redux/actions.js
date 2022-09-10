import * as types from './actionTypes';
import {auth} from "../firebase";


export const registerStart = () => ({
    type: types.REGISTER_START,
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err
});

export const loginStart = () => ({
    type: types.LOGIN_START,
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
});

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
})

export const logoutError = () => ({
    type: types.LOGOUT_ERROR
});

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
            user.updateProfile({
                displayName
            })
                dispatch(registerSuccess(user))
        })
            .catch((err) => dispatch(registerError(err.message)))
    }
}


export const loginInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e.message)))
    }
}


export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then((resp) => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.message)))
    }
}

