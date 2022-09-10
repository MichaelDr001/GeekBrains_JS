import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInit } from "../redux/actions";

const HomePage = () => {
    const user = useSelector (state => state.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInit())
        }
        setTimeout(() => {
            navigate('/login')
        }, 1500)
    }
    return (
        <div>
            <h1>home page</h1>
            <button onClick={handleAuth}>log out</button>
        </div>
    )
}

export default HomePage