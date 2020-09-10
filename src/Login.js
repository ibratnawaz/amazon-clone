import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => { 
            history.push('/')
        })
        .catch(error => {
            if(email == '')
                document.getElementById('email_message').innerHTML=error.message
                
            else if(password.length<6)
                document.getElementById('password_message').innerHTML=error.message
            
            else
            {
                document.getElementById('email_message').innerHTML=error.message
                document.getElementById('password_message').innerHTML=''
            }
        })
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //if successfully created the user account 
                //it will execute otherwise catch block will execute
                history.push('/')
            })
            .catch(error => {
                if(email == '')
                    document.getElementById('email_message').innerHTML=error.message
                    
                else if(password.length<6)
                    document.getElementById('password_message').innerHTML=error.message

                else
                    document.getElementById('email_message').innerHTML=error.message
            } )
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <span id="email_message"></span>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <span id="password_message"></span>

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
