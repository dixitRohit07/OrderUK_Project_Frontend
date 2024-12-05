import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'

const Login = () => {

    const navigate = useNavigate()
    const [loginInfo ,setLoginInfo] = useState({

        email: "",
        password:""

    })


    function handleOnChange(e) {

        let name = e.target.name;
        let value = e.target.value;

        // console.log(value);

        setLoginInfo({
            ...loginInfo,
            [name]:value
        })

        console.log(loginInfo);
        
        
        
    }

    function changeOnSignup() {

        navigate("/SignUp")
    }


    async function handleOnSubmit(e) {
        e.preventDefault()

        console.log(loginInfo);


        let response = await fetch(`${BASE_URL}/api/auth/signin`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(loginInfo)
        });

        console.log(response)
        
        if(response.ok){
            navigate("/Home")

            localStorage.setItem("email",loginInfo.email)
        }
    }





    return (
        <>

            <div className='loginPage'>

                <div className='logoimg'>
                    <img src="LOGO.png" alt="" />
                </div>

                <h1 className='loginh1'>Welcome Back  👋</h1>
                <p className='loginpara'>Today is a new day. 
                    It's your day. You shape it.<br />
                    Sign in to start ordering.
                </p>

                <form method='POST' onSubmit={handleOnSubmit} action="">

                    <div className="form">

                        <label htmlFor="email">Email</label>
                        <input onChange={handleOnChange} name='email' type="email" id="email" placeholder='Example@email.com' />

                        <label htmlFor="password">Password</label>
                        <input onChange={handleOnChange} name='password' type="password" id="password" placeholder='At least 8 characters' />

                        <button type='submit' className='sign'>Sign in</button>

                    </div>

                    <span className='account'>Don't you have an account?
                        <span onClick={changeOnSignup} >
                            Sign up
                        </span>


                    </span>
                </form>

            </div>
        </>
    )
}

export default Login