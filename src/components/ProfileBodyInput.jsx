import React, { useState, useEffecet, useEffect } from 'react'
import './ProfileBodyInput.css'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import { data } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../services/helper'



const ProfileBodyInput = () => {

    const navigate = useNavigate();

    function handleChangeHome() {
        navigate("/Home")
    }

    const [userInfo, setUserInfo] = useState([]);



    const getUserData = async () => {
        const signInData = {
            email: localStorage.getItem("email"),
        };
        const response = await fetch(`${BASE_URL}/api/auth/userData`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signInData),
            }
        );

        if (response.ok) {
            let gettedData = await response.json();
            // console.log(gettedData.msg);
            setUserInfo(gettedData.msg);
        }
    };

    const [inputInfoUpdate, setInputInfoUpdate] = useState({
        name: userInfo.name,
        email: userInfo.email,
        old_email: localStorage.getItem("email"),
    });

    const editProfileData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputInfoUpdate({
            ...inputInfoUpdate,
            [name]: value,
        });
    };

    const handleOnSaveData = async () => {
        // setActiveEditProfile(true)
        navigate("/Profile")
        if (inputInfoUpdate.name == undefined) {
            inputInfoUpdate.name = userInfo.name;
        }
        if (inputInfoUpdate.email == undefined) {
            inputInfoUpdate.email = localStorage.getItem("email");
        }

        localStorage.setItem("email", inputInfoUpdate.email)

        const response = await fetch(
            `${BASE_URL}/api/auth/profileData`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputInfoUpdate),
            }
        );
        if (response.ok) {
            const response = await fetch(
                `${BASE_URL}/api/auth/userData`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(signInData),
                }
            );

            if (response.ok) {
                let gettedData = await response.json();
                console.log(gettedData.msg);
                setUserInfo(gettedData.msg);
            }
        }
    };

    useEffect(() => {
        getUserData();
    }, [])













    const getScreenWidth = () => {
        return {
            width: window.innerWidth
        }
    }
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());
    useEffect(() => {
        const Width = () => {
            setScreenWidth(getScreenWidth());
        };
        window.addEventListener('resize', Width);
    }, []);

    useEffect(() => {
        getUserData();
    }, []);


    return (
        <>



            {screenWidth.width > 768 ? (
                <>
                    < div className="checkOutNavbar1">
                        <Navbar1 />
                    </div >

                    <div className="checkOutNavbar2">
                        {/* <CheckOutNavbar2 /> */}
                        <Navbar2 />
                    </div>



                    <div className="editProfileBody">
                        <p onClick={handleChangeHome} className="bodyHead">
                            <img onClick={handleChangeHome} src="arrow-left.png" alt="" />
                            <img src="backIcon.png" alt="" />
                            My Profile
                        </p>
                        <div className="body_profile">
                            <div className="profileHead">
                                <div>
                                    <img src="profilePic.png" alt="" />
                                    <p>{userInfo.name}</p>
                                </div>
                                <div onClick={handleOnSaveData} className="editBtn">Save</div>
                            </div>
                            <div className="profileData">
                                <div className="name_gender">
                                    <div className="fname">
                                        <p>Full Name</p>
                                        <input onChange={editProfileData} type="text" name='name' placeholder={userInfo.name} />
                                    </div>
                                    <div className="gender">
                                        <p>Gender</p>
                                        <input type="text" value={"Male"} />
                                    </div>
                                </div>
                                <div className="email_country">
                                    <div className="emailAdd">
                                        <p>Email Address</p>
                                        <input onChange={editProfileData} type="text" name='email' placeholder={userInfo.email} />
                                    </div>
                                    <div className="country">
                                        <p>Country</p>
                                        <input type="text" value={"India"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="paymentMethod">
                            <p>Saved Payment Methods</p>
                            <div className="PaymentCards">
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="addCardBtn">
                                    <img src="btnImg3.png" alt="" />

                                    <p>Add New Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>

                    <div className="navbar1mobile">
                        <NavbarMob1 />
                    </div>



                    <div className="editProfileBody">
                        <p className="bodyHead">
                            <img src="arrow-left.png" alt="" />
                            <img src="backIcon.png" alt="" />
                            My Profile
                        </p>
                        <div className="body_profile">
                            <div className="profileHead">
                                <div>
                                    <img src="profilePic.png" alt="" />
                                    <p>{userInfo.name}</p>
                                </div>
                                <div onClick={handleOnSaveData} className="editBtn">Save</div>
                            </div>
                            <div className="profileData">
                                <div className="name_gender">
                                    <div className="fname">
                                        <p>Full Name</p>
                                        <input onChange={editProfileData} type="text" name='name' placeholder={userInfo.name} />
                                    </div>
                                    <div className="gender">
                                        <p>Gender</p>
                                        <input type="text" value={"Male"} />
                                    </div>
                                </div>
                                <div className="email_country">
                                    <div className="emailAdd">
                                        <p>Email Address</p>
                                        <input onChange={editProfileData} type="text" name='email' placeholder={userInfo.email} />
                                    </div>
                                    <div className="country">
                                        <p>Country</p>
                                        <input type="text" value={"India"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="paymentMethod">
                            <p>Saved Payment Methods</p>
                            <div className="PaymentCards">
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="paymentCard">
                                    <img src="cardPic.png" alt="" />
                                    <div className="cardDetails">
                                        <p>xxxx xxxx xxxx 1234</p>
                                        <p>Mike Ross</p>
                                    </div>
                                    <img src="edit-3.png" alt="" />
                                </div>
                                <div className="addCardBtn">
                                    <img src="btnImg3.png" alt="" />

                                    <p>Add New Card</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}




        </>
    )
}

export default ProfileBodyInput