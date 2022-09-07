import { loadStart, errPosts } from "../actions"
import { GET_POSTS, LOAD_POSTS, ERROR_POSTS } from "../actionTypes"



const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case LOAD_POSTS:
            return {
                ...state,
                loading: true
            }
        case ERROR_POSTS:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export const getPosts = () => {
    return async dispatch => {
        dispatch (loadStart())
        try {
            const responce = await fetch ('https://jsonplaceholder.typicode.com/posts')
            const data = await responce.json()
            dispatch ({
                type: GET_POSTS, payload: data
            })
        } catch (err) {
            dispatch(errPosts(err))
        }
    }
}