import { ERROR_POSTS, LOAD_POSTS } from "./actionTypes"

export const loadStart = () => (
    {
        type: LOAD_POSTS
    }
)

export const errPosts = (err) => (
    {
        type: ERROR_POSTS,
        payload: err.toString()
    }
)