import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {registerInitiate} from "../redux/actions";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
       e.preventDefault();
       if(password !== passwordConfirm) {
           return;
       }
       dispatch(registerInitiate(email, password, displayName))
    }

    return (
        <div>
                <h2 style={{ marginTop: 20}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type='text' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    <button type='submit'>SIGN UP</button>
                </form>
        </div>
    );
};

export default RegisterPage;