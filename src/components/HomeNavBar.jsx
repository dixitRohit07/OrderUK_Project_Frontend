import React, { useEffect, useState } from 'react'
import './HomeNavBar.css'
import { Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'



const HomeNavBar = () => {


    const [useData, setUserData] = useState([]);

    const userInfo = {
      email: localStorage.getItem("email"),
    };
  
    // console.log("ggggggggggggggg",userInfo);
  
    async function getUserData() {
      const response = await fetch(`${BASE_URL}/api/auth/userData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
  
      if (response.ok) {
        let data = await response.json();
  
        setUserData(data.msg);
      }
    }
    const navigate = useNavigate()

    function handlechangeProduct(){
      navigate("/Product")
    }

    function handleChangeProfile(){
      navigate("/Profile")
    }
  
    useEffect(() => {
      getUserData();
    }, []);



  return (
   <>
   <div className='Nav2' >
                <div className="nav2box1">
                    <img className='navlogo' src="LOGO.png" />
                </div>
                <div className="nav2box2">
                    <span id='homeSpan'>Home</span>
                    <span>Special Offers</span>
                    <span onClick={handlechangeProduct}>Restaurants</span>
                    <span>Track Order</span>
                </div>
                <div onClick={handleChangeProfile} className='nav2box3' >
                    <div className='nav2box31' >

                        <img src="Male User.png" alt="" className="user" />
                        <span>hey {useData.name}</span>
                    </div>
                </div>
            </div>
   </>
  )
}

export default HomeNavBar