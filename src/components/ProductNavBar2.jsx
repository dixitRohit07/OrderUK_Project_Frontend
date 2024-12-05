import React, { useEffect, useState } from 'react'
import './ProductNavBar2.css'
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../services/helper'


const ProductNavBar2 = () => {
  const navigate = useNavigate();


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

  function handleBackHome() {
    navigate("/Home")
  }

  function handleChengeProfile() {
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
          < span onClick={handleBackHome}>Home</span>
          <span>Special Offers</span>
          <span id='restSpan'>Restaurants</span>
          <span>Track Order</span>
        </div>
        <div className='nav2box3' >
          <div onClick={handleChengeProfile} className='nav2box31' >

            <img src="Male User.png" alt="" className="user" />
            <span>hey{useData.name}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductNavBar2