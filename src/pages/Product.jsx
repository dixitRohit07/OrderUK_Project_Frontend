import React, { useEffect, useState } from 'react'
import './Product.css'
import Navbar1 from '../components/Navbar1'
import Prodoffer from '../components/Prodoffer'
import Proddnav2 from '../components/Proddnav2'
import ProdNavbar2 from '../components/ProdNavbar2'
import Dispic from '../components/Dispic'
import Burgers from '../components/Burgers'
import Fries from '../components/Fries'
import Cold_Drinks from '../components/Cold_Drinks'
import Map from '../components/Map'
import SimilarResto from '../components/SimilarResto'
import Footer from '../components/Footer'
import MyBasket from '../components/MyBasket'
import CustomerRiviewCards from '../components/CustomerRiviewCards'

import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import NavbarMob2 from '../MobileComoponents/NavbarMob2'
import Navbar2 from '../components/Navbar2'
import ProductNav2Mob from '../MobileComoponents/ProductNav2Mob'
import ProductBodyAndCart from '../components/ProductBodyAndCart'
import ProductNavBar2 from '../components/ProductNavBar2'
import {BASE_URL} from '../services/helper'




const Product = () => {

    const [accessCart, setAccessCart] = useState(false)

    const [mobileAccessCart ,setMobileAccessCart]= useState(true)





    const postCartData = async(data) =>{

        console.log(data);

        const response = await fetch (`${BASE_URL}/api/auth/addCartInfo`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)


        }
        )
    }

  



    const getScreenWidth = () => {
        return {
            width: window.innerWidth,

        };
    }

    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    useEffect(() => {
        const Width = () => {
            setScreenWidth(getScreenWidth());
        };

        window.addEventListener('resize', Width);

    }, []);






    return (
        <>



            {screenWidth.width > 768 ? (

                <>

                    <div className="pnavbar1">
                        <Navbar1 setAccessCart={setAccessCart} />
                    </div>

                   
                    <div className="navbar2">
                      
                        <ProductNavBar2/>
                    </div>

                    <div className="maclo">
                        <img src="mclo.jpg" alt="" />
                    </div>

                    <div className="off">
                        <Prodoffer />
                    </div>

                    <div className="prodnav2">
                        <Proddnav2 />
                    </div>

                    {
                        !accessCart ? (
                            <>

                                <div className="productBody">

                                    <div className="dispics">
                                        <Dispic />
                                    </div>

                                    <div className="burgerss">
                                        <Burgers  postCartData={postCartData}  />
                                    </div>

                                    <div className="friess">
                                        <Fries postCartData={postCartData}  />
                                    </div>

                                    <div className="Colddrink">
                                        <Cold_Drinks postCartData={postCartData}/>
                                    </div>
                                </div>
                            </>
                        ) :
                            (
                                <>
                                    <div className="ProductBodyAndCartDesktop">

                                        <ProductBodyAndCart postCartData={postCartData}  />
                                    </div>

                                </>
                            )

                    }



                    <div className="delivery">
                        <img src="prodelivery.jpg" alt="" />
                    </div>

                    <div className="maps">
                        <Map />
                    </div>

                    <div className="customerrev">
                        <CustomerRiviewCards />
                    </div>

                    <div className="similarrest">
                        <SimilarResto />
                    </div>

                    <div className="productFooter">
                        <Footer />
                    </div>


                </>

            ) : (
                <>


                
                {
                    mobileAccessCart ? (
                    <>
                    
                    <div className="navbar1mobile">
                        <NavbarMob1 />
                    </div>

                    <div className="nav2mobile">
                        <NavbarMob2 setMobileAccessCart ={setMobileAccessCart} />
                    </div>

                    <div className="addM">
                        <img src="Location.png" alt="" /> <span>Lution Street, N4G-00....</span>
                    </div>

                    <div className="RatingMob">
                        <img src="RatingMob.jpg" alt="" />
                    </div>

                    <div className="prodnav2">
                        {/* <Proddnav2 /> */}

                        <ProductNav2Mob />
                    </div>

                    <div className="burgerss">
                        <Burgers />
                    </div>

                    <div className="friess">
                        <Fries />
                    </div>

                    <div className="Colddrink">
                        <Cold_Drinks />
                    </div>

                    <div className="similarrestMob">
                        <SimilarResto />
                    </div>

                    <div className="customerrev">
                        <CustomerRiviewCards />
                    </div>


                    <div className="maps">
                        <Map />
                    </div>

                    <div className="productFooter">
                        <Footer />
                    </div>
                    
                    
                    </>):(
                        
                        <>
                        
                        
                    <div className="Basket">
                        <MyBasket setMobileAccessCart ={setMobileAccessCart} />
                    </div>
                        
                        
                        </>)      
                    
                                  
                     
                     






                }



                    





                </>
            )}








        </>
    )
}

export default Product