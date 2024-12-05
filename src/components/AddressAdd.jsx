import React, { useEffect, useState } from "react";
import "./AddressAdd.css";
import Navbar1 from "./Navbar1";
import CheckOutNavbar2 from "./CheckOutNavbar2";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import AddAdress from "./AddAdress";
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../services/helper'


const AddressAdd = () => {

    const navigate = useNavigate()

    const [selectAddress, setSelectAddress] = useState(true)

    const [addInfo, setAddInfo] = useState([])



    function handlePlusAddress() {
        console.log("plusAddress");
        setSelectAddress(false)
    }


    function handleBackCheckOut() {
        navigate("/CheckOut")
    }


    const getScreenWidth = () => {
        return {
            width: window.innerWidth
        }
    }


    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    useEffect(() => {
        const Width = () => {
            setScreenWidth(getScreenWidth());
        }
        window.addEventListener('resize', Width);
    }, []);



    const getAddressData = async () => {
        const response = await fetch(`${BASE_URL}/api/auth/getAddress`, {
            method: "GET",
        })
        console.log(response);

        if (response.ok) {
            let data = await response.json()

            console.log(data.msg);

            setAddInfo(data.msg)

        }

    }


    const deleteAddressData = async (data)=>{

        console.log(data);
      
        const response = await fetch(`${BASE_URL}/api/auth/deleteadd`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })


        if(response.ok){
            const response = await fetch(`${BASE_URL}/api/auth/getAddress`,{
                method: "GET",
            })
    
            if(response.ok){
                let data = await response.json()
                setAddInfo(data.msg)
            }
        }
        
    }

    function handleChangeCheckout(){
        navigate("/CheckOut")
    }


    useEffect(() => {
        getAddressData()
    },[])




    return (
        <>


            {screenWidth.width > 768 ? (

                <>

                    <div className="AddressAd">
                        <div className="checkOutNavbar1">
                            <Navbar1 />
                        </div>

                        <div className="checkOutNavbar2">
                           
                            <Navbar2 />
                        </div>

                        <div className="addressPlus">
                            <div className="addressHead">
                                <img onClick={handleBackCheckOut} src="arrow-left.png" alt="" />
                                <p>Your Addresses</p>
                            </div>


                            <div className="addresses">


                                <div className="addAddressbox">

                                    <img onClick={handlePlusAddress} src="Frame 100.png" alt="" />
                                    <p>Add Address</p>

                                </div>



                                {addInfo.map((data) => (
                                    <>

                                        <div className="AddressData">
                                            <div className="addresData1">
                                                <p>Mike Ross</p>
                                                {/* <div id="addressdefault">Default</div> */}
                                            </div>

                                            <div className="addresData2">
                                                {data.address}
                                            </div>

                                            <div className="addresData3">Phone Number:{data.number}</div>

                                            <div className="addresData4">
                                                <p>Edit</p>
                                                < p onClick={()=>deleteAddressData(data)}>Remove</p>
                                            </div>
                                        </div>
                                    </>

                                ))}


                            </div>


                        </div>


                        <div className="addressFooter">
                            <Footer />
                        </div>


                        {selectAddress ? null : <AddAdress setSelectAddress = {setSelectAddress} />}


                    </div>

                </>
            ) : (

                <>

                    <div className="navbar1mobile">
                        <NavbarMob1 />
                    </div>

                    <div className="checkArrowMob">
                        <img onClick={handleChangeCheckout} src="checkOutArrow.png" alt="" />
                        <p>Your Addresses</p>
                    </div>


                    <div className="addressesMob">


                        <div className="addAddressboxMob">

                            <img  onClick={handlePlusAddress} src="Frame 100.png" alt="" />
                            <p>Add Address</p>

                        </div>


                        {addInfo.map((e) => (
                            <>

                                <div className="AddressDataMob">
                                    <div className="addresData1">
                                        <p>Mike Ross</p>
                                        {/* <div id="addressdefault">Default</div> */}
                                    </div>

                                    <div className="addresData2">
                                      {e.address}
                                    </div>

                                    <div className="addresData3">Phone Number:{e.number}</div>

                                    <div className="addresData4">
                                        <p>Edit</p>
                                        < p>Remove</p>
                                    </div>
                                </div>
                            </>

                        ))}






                        {selectAddress ? null : <AddAdress setSelectAddress = {setSelectAddress}  />}


                    </div>

                </>

            )}




        </>
    );
};

export default AddressAdd;
