import React, { useEffect,useState } from 'react'
import './MyBasket.css'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'


const MyBasket = ({render ,setMobileAccessCart}) => {

    const navigate = useNavigate()

    const [cartInfo, setCartInfo] = useState([])


    const getCartData = async () => {

        const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`, {
            method: "GET",
        })

        if (response.ok) {
            const data = await response.json()
            
            setCartInfo(data.msg)

        }

        // console.log("kdjfhvdehfvodejfo", response);
    }

    // console.log("cartttttttttt",cartInfo);
    

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

    const handleOnDelete = async(e)=>{

                 
        const response = await fetch(`${BASE_URL}/api/auth/deleteCartFood`,
        {
            method:"DELETE",
            headers:{

            
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(e)

        }
        )

        if(response.ok){

            // console.log("delete")
            const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`, {
                method: "GET",
            })
    
            if (response.ok) {
                const data = await response.json()
                
                setCartInfo(data.msg)
    
            }
    

        }

    }

    function onhandleChangeCheckOutPage(){
        navigate("/CheckOut")
    }

    useEffect(() => {

        getCartData()

    }, [render])



    return (


        
        <div className="basket">

            <div onClick={closeBasketCart} className="closeimg">
                <img src="cross.png" alt="" />
            </div>

            <div className="copylink">
                <div className="sharelogo">
                    <img src="share-2.png" alt="" />
                </div>
                <p>Share this cart with your friends</p>
                <div className="link">Copy Link</div>
            </div>

            <div className="cart">

                <div className="BascketLogo">
                    <img src="Full Shopping Basket (1).png" alt="" />
                    <p>My Basket</p>

                </div>

                <div className="order_quantity">

                    {cartInfo.map((e) => (
                        <div className="order1">
                            <div className="quantity">{e.quantity}x</div>
                            <div className="food_name">
                                <p className='rupees'>₹{e.price}</p>
                                <p className='fname'>{e.title}</p>
                                {/* <p >With extra fries</p> */}
                            </div>
                            <div className="order_removeLogo">
                                <img onClick={()=>handleOnDelete(e)} src="Remove.png" alt="" />
                            </div>
                        </div>
                    ))}



            

                </div>


             

                <div className="charges">
                    <div className="subTotal">
                        <span>Sub Total:</span><span>₹{totalSum}</span>
                    </div>
                    <div className="subTotal">
                        <span>Discounts:</span><span>-₹10.00</span>
                    </div>
                    <div className="subTotal">
                        <span>Delivery Fee:</span><span>₹10.00</span>
                    </div>

                </div>

                <div className="totalPay">

                    <div className="total">
                        <span>Total to pay</span><span>₹{totalSum}.00</span>
                    </div>

                    <div className="Totalinput1">
                        <p>Choose your free item..</p>
                        <img src="Forward Button (1).png" alt="" />
                    </div>

                    <div className="Totalinput2">
                        <p>Apply Coupon Code here</p>
                        <img src="Forward Button (3).png" alt="" />
                    </div>


                </div>

                <div className="checkout">

                    <div className="checkoutbox">

                        <div className="checkoutDelevery">
                            <img src="Delivery Scooter.png" alt="" />
                            <p>Delivery</p>
                            <p>Starts at 17:50</p>

                        </div>
                        <div className="checkoutCollection">
                            <img src="New Store.png" alt="" />
                            <p>Collection</p>
                            <p>Starts at 16:50</p>
                        </div>
                    </div>

                    <div onClick={onhandleChangeCheckOutPage} className="checkoutDiv">

                        <img src="Forward Button (4).png" alt="" />
                        Checkout!

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyBasket