import React, {useState, useEffect} from "react";
import { loginInit } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const user = useSelector (state => state.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect (() => {
        if(user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !pass) {
            return
        }
        dispatch(loginInit(email, pass))
    }

    return (
        <div>
            <header>
                <Link to={'/register'}>sign up</Link>
            </header>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={pass} onChange={(e) => setPass(e.target.value)}/>
                <button type='submit'>sign in</button>
            </form>
        </div>
    )
}

export default LoginPage