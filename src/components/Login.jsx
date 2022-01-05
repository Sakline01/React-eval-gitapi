import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/action';
const Login = () => {
    let isAuth = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(auth(true))
    }
    console.log(isAuth.isAuth);
    if (isAuth.isAuth) {
        return <Redirect to="/home" />;
    }
    return (
        <div>
            <h1>Login page</h1>
            <Button variant="contained" color="secondary" onClick={handleClick}>Login</Button>
        </div>
    );
}

export default Login;
