import React, { useState } from 'react'
import './SignupCompo.css'

import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../services/helper'


const SignupCompo = () => {

    const navigate = useNavigate()
    
    
    function handleInput(e) {



        let name = e.target.name;
        let value = e.target.value;

        // console.log(name,value);

        setUser({
            ...user,
            [name]: value
        })
        console.log(user);


    }


    function handleOnChange() {



        navigate("/")



    }

    const [user, setUser] = useState({

        name: "",
        phone: "",
        email: "",
        password: "",

    })

    async function handleonSubmit(e) {

        e.preventDefault()

        console.log(user);
      

        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        console.log(response);

        if (response.ok) {
            navigate("/")
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

                <form onSubmit={handleonSubmit} action="">

                    <div className="form">

                        <label htmlFor="name">Name</label>
                        <input onChange={handleInput} type="text" id="name" name='name' placeholder='eg. John A' required />


                        <label htmlFor="number">Phone Number</label>
                        <input onChange={handleInput} type="number" id="number" name='phone' placeholder='Enter your 10 digit mobile number' required />


                        <label htmlFor="email">Email</label>
                        <input onChange={handleInput} type="email" id="email" name='email' placeholder='Example@email.com' required />

                        <label htmlFor="password">Password</label>
                        <input onChange={handleInput} type="password" id="password" name='password' placeholder='At least 8 characters' required />

                        <button type='submit' className='sign'>Continue</button>

                    </div>

                    <span className='account'>Don't you have an account?
                        <span onClick={handleOnChange} >
                            Sign In
                        </span>


                    </span>
                </form>

            </div>

        </>
    )
}

export default SignupCompo