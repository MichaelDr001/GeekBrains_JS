import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInit } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const RegPage = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [passConfirm, setPassComfirm] = useState()
    const [displayName, setDisplayName] = useState()
    // const user = useSelector (state => state.currentUser)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    // useEffect (() => {
    //     if(user) {
    //         navigate('/')
    //     }
    // }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(pass !== passConfirm) {
            return
        }
        dispatch(registerInit(email, pass, displayName))
    }

    return (
        <div>
            <header>
                <Link to={'/login'}>sign in</Link>
            </header>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={pass} onChange={(e) => setPass(e.target.value)}/>
                <input value={passConfirm} onChange={(e) => setPassComfirm(e.target.value)}/>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                <button type='submit'>sign up</button>
            </form>
        </div>
    )
}

export default RegPage