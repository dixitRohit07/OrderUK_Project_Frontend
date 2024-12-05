import React, { useEffect, useState } from 'react'
import './Order_Details.css'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'


const Order_Details = () => {

    const [cartInfo, setCartInfo] = useState([])


    const getCartData = async () => {

        const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`, {
            method: "GET",
        })

        if (response.ok) {
            const data = await response.json()
            
            setCartInfo(data.msg)

        }

        console.log("kdjfhvdehfvodejfo", response);
    }

    console.log("cartttttttttt",cartInfo);
    

    function calculateTotal(cartInfo) {
        return cartInfo.reduce((total, item) => {
          return total + item.quantity * parseFloat(item.price);
        }, 0);
      }
    
          const totalSum = calculateTotal(cartInfo);

    const closeBasketCart = ()=>{

        setMobileAccessCart(true)


        // console.log("sdvsd");
        

    }


    const navigate = useNavigate()


    function handleChangePaymentPage(){

        navigate("/Payment")
    }

    function handleChangeAddressPage(){
        navigate("/AdddressAdd")
    }

    function handleBackProductPage(){
        navigate("/Product")
    }

    useEffect(()=>{
        getCartData()
    },[])
    return (
        <>
            <div className="ordersinfo">

                <div className="yourDeatail">
                    <img onClick={handleBackProductPage} id='arroeleft' src="arrow-left.png" alt="" />
                    <p>Your Order Details</p>
                </div>

                <div className="orderinformation">

                    <div className="orderinfoLeft">

                        <div className="orders">


                            {cartInfo.map((e)=>(
                                <>
                                
                                <div className="oreder1">
                                <div className="order1info">

                                    <img src="Rectangle 11.png" alt="" />

                                    <div className="fnameandItem">
                                        <p>{e.title}</p>
                                        <p>{e.quantity}x item</p>
                                    </div>

                                </div>

                                <div className="order1Price">
                                    ₹{e.price}
                                </div>
                            </div>

                                </>


                            ))}
                         


                          

                        </div>


                        <div className="writenote">
                            <p>Notes</p>
                            <input type="text" name="" id="" placeholder='Add order notes' />
                        </div>



                    </div>


                    <div className="orderinforight">

                        <div className="Deliveryhead">
                            Delivery Address
                        </div>

                        <div onClick={handleChangeAddressPage} className="orderinfo1">
                            <div className="addressWithImg">
                                <img src="Icon.png" alt="" />

                                <div className="DeliveryAdd">
                                    <p>Delivery Address</p>
                                    <p>45, Green Street, Sector 12...</p>

                                </div>
                            </div>

                            <div className="addressArrow">
                                <img src="ArrowRight.png" alt="" />
                            </div>

                        </div>

                        <div className="orderinfo2">
                            <div className="orderinfoItems">
                                <p>Items</p>
                                <p>₹{totalSum}</p>
                            </div>

                            <div className="orderinfoTax">
                                <p>Sales Tax</p>
                                <p>₹10</p>
                            </div>

                        </div>
                        <div className="orderinfo3">
                            <span>Subtotal (3 items)</span>
                            <span>₹{totalSum+10}</span>
                        </div>
                        <div onClick={handleChangePaymentPage} className="orderinfo4">
                            Choose Payment Method
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Order_Details