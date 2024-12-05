import React, { useEffect, useState } from 'react';
import "../MobileComoponents/NavbarMob2.css"
// import cart from '../assets/cartlogo.png'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'



const NavbarM2 = ({setMobileAccessCart}) => {
  const navigate = useNavigate()

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

  function handleChangeProfile(){
    navigate("/Profile")
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleaccessmobilecart = ()=>{
    setMobileAccessCart(false)
  }
  return (
    <>
    <div className='nav2m2' >
      <div onClick={handleChangeProfile} className="n2m2_1">
        <div className="mobnavimgg">

         <img src="profile.png" alt="" />
        </div>
         <span>Hey  {useData.name}</span>
      </div>
      <div onClick={handleaccessmobilecart} className="n2m2_2">
            <div className="cartm1">
                <img src="cartlogo.png" alt="" />
            </div>
            <div className='carttextmob' >
                <span>My Cart</span>
            </div>
      </div>
    </div>
  
    </>
  );
}

export default NavbarM2;