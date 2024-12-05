import React, { useEffect, useState } from 'react'
import './CheckOutPage.css'
import Navbar1 from '../components/Navbar1'
import CheckOutNavbar2 from '../components/CheckOutNavbar2'
import Order_Details from '../components/Order_Details'
import SimilarResto from '../components/SimilarResto'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import {useNavigate} from 'react-router-dom'



const CheckOutPage = () => {


  const navigate = useNavigate()


  function handleBacktoProductPg(){
    navigate("/Product")
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




  return (
    <>

      {screenWidth.width > 768 ? (
        <>


          <div className="checkOut">

            <div className="checkOutNavbar1">
              <Navbar1 />
            </div>

            <div className="checkOutNavbar2">

              {/* <CheckOutNavbar2/> */}
              <Navbar2 />

            </div>

            <div className="ordersDetails">

              <Order_Details />

            </div>

            <div className="CheckoutSimilarRestaurant">

              <SimilarResto />
            </div>


            <div className="checkoutFooter">

              <Footer />

            </div>



          </div>



        </>


      ) : (

        <>

          <div className="navbar1mobile">
            <NavbarMob1/>
          </div>

          <div onClick={handleBacktoProductPg}  className="checkArrowMob">
            <img src="checkOutArrow.png" alt="" />
            <p>Checkout</p>

          </div>


          <div className="ordersDetailsMob">

              <Order_Details />

            </div>






        </>

      )}

    </>
  )
}

export default CheckOutPage