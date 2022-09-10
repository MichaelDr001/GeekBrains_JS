import * as types from "../../actionTypes";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGOUT_START:
        case types.LOGIN_START:
         return {
             ...state,
             loading: true
         }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
                return {
                ...state,
                    error: action.payload,
                    loading: false
                }
        default:
            return state
    }
}


