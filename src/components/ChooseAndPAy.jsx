import React, { useEffect, useState } from 'react'
import './ChooseAndPAy.css'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'

const ChooseAndPAy = ({setPaymentSucessPage}) => {

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

      console.log("kdjfhvdehfvodejfo", response);
  }

  console.log("cartttttttttt",cartInfo);
  

  function calculateTotal(cartInfo) {
      return cartInfo.reduce((total, item) => {
        return total + item.quantity * parseFloat(item.price);
      }, 0);
    }
  
        const totalSum = calculateTotal(cartInfo);


  const handleProcessPayment = ()=>{
console.log("abcdefghijk");

    setPaymentSucessPage(false)


  }

  function handlecheckoutpage(){
    navigate("/CheckOut")
  }

  useEffect(()=>{
    getCartData()
},[])
  
  return (
    <>

<div className="chooseAndPay">
          <h1><img  onClick={handlecheckoutpage} src="arrow-left.png" alt="" /> Choose and Pay </h1>
          <div className="wallet_PaymentProcess">
            <div className="walletDiv">
              <div className="walletPanel">
                <div className="walletInput">
                  <img src="Icon (1).png" alt="" />
                  <div className="walletDetails">
                    <p>Wallet</p>
                    <p>Available balance: ₹300</p>
                  </div>

                  <div className="frwdArrow"> ＞ </div>
                </div>
              </div>
              <div className="paymentOpt">
                <div className="PaymentCard">
                  <div className="icon_Name">
                    <img src="mastercardimg.png" alt="" />
                    <p>MaestroKard</p>
                  </div>
                  <img src="Radio.png" alt="" />
                </div>

                <div className="PaymentCard">
                  <div className="icon_Name">
                    <img src="payPalImg.png" alt="" />
                    <p>Paypal</p>
                  </div>
                  <img src="Radio.png" alt="" />
                </div>
                <div className="PaymentCard">
                  <div className="icon_Name">
                    <img src="Stripe.png" alt="" />
                    <p>Stripe</p>
                  </div>
                  <img src="Radio.png" alt="" />
                </div>
                <div className="PaymentCard">
                  <div className="icon_Name">
                    <img src="addCardImg.png" alt="" />
                    <p>Add Debit Card</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProcessPayment">
              <div className="amt_to_pay">
                <p>Amount to be payed</p>
                <p>₹{totalSum+10}</p>
              </div>
              <div onClick={handleProcessPayment} className="pay_process_btn">
                <div className="payBtn">Proceed Payment</div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default ChooseAndPAy