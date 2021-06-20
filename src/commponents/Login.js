import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Sigin = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error=> alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=> alert(error.message))
    }

    return (
        <div className= 'login'>
            <Link to='/'>
            <img className="login_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbEGoAAOT2e9grED4G3hqjiM1afks8nvii7PZGDe0dJeKnmrONwswHeD_N1gbDGCHNi8&usqp=CAU" alt='Logo' />
            </Link>

            <div className="login_container">
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" vlaue={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password"  vlaue={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button className="login_btn" type="submit" onClick={Sigin}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>


            </div>
            <h5>New to Amazon?</h5>
                <button className="login_create" onClick={register}>create Your Amazon Account </button>
        </div>
    )
}

export default Login
