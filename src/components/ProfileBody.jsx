import React, { useEffect, useState } from "react";
import "./ProfileBody.css";
import ProfileBodyInput from "./ProfileBodyInput";
import { useNavigate } from "react-router-dom";
import EditPayment from "./EditPayment";
import {BASE_URL} from '../services/helper'


const ProfileBody = () => {
  const navigate = useNavigate();

  // const [editProfile, setEditProfile] = useState(true)

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




  function handlechangeEdit() {
    // setEditProfile(false)
    console.log("dfdv");
    navigate("/ProfileBodyInput");
  }

  function handleBackHome() {
    navigate("/Home")
  }

  const [cardData, setCardData] = useState([])

  const getCardData = async () => {

    const response = await fetch(`${BASE_URL}/api/auth/getCardData`, {
      method: "GET",

    })

    if (response.ok) {
      const data = await response.json()

      setCardData(data.msg)

    }
  }

  const[selectEditPay , setSelectEditPay] = useState(true)
  const [editpayment , setEditPayment] = useState()

  function handleOpenEditCard(e){
    console.log("Selectedit",e);
    setEditPayment(e)
    
    setSelectEditPay(false)
  }


  useEffect(() => {
    getUserData(),
    getCardData()
  }, []);


  return (
    <>

      <div className="profileBody">
        <p onClick={handleBackHome} className="bodyHead">
          <img onClick={handleBackHome} src="arrow-left.png" alt="" />
          <img onClick={handleBackHome} src="backIcon.png" alt="" />
          My Profile
        </p>
        <div className="body_profile">
          <div className="profileHead">
            <div>
              <img id="picimgg" src="profilePic.png" alt="" />
              <p>{useData.name}</p>
            </div>
            <div onClick={handlechangeEdit} className="editBtn">
              Edit
            </div>
          </div>
          <div className="profileData">
            <div className="name_gender">
              <div className="fname">
                <p>Full Name</p>
                <p>{useData.name}</p>
              </div>
              <div className="gender">
                <p>Gender</p>
                <p>Male</p>
              </div>
            </div>
            <div className="email_country">
              <div className="emailAdd">
                <p>Email Address</p>
                <p>{useData.email}</p>
              </div>
              <div className="country">
                <p>Country</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="paymentMethod">
          <p>Saved Payment Methods</p>
          <div className="PaymentCards">

            {cardData.map((e) => (

              <>
                <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>{e.number}</p>
                    <p>{e.name}</p>
                  </div>
                  <img id="clickeditcardimg" onClick={()=>handleOpenEditCard(e)} src="edit-3.png" alt="" />
                </div>
              </>

            ))}
         
            <div className="addCardBtn">
              <img src="btnImg3.png" alt="" />

              <p>Add New Card</p>
            </div>
          </div>
        </div>
      </div>


      {selectEditPay?null:
    
    <div className="editPaymentMethod">
      <EditPayment editpayment={editpayment} setSelectEditPay = {setSelectEditPay}/>
    </div>
    
    }
    </>
  );
};

export default ProfileBody;
