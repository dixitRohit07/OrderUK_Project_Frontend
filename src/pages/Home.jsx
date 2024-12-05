import React, { useEffect, useState } from 'react'

import './Home.css'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Order from '../components/Order'
import Foodpic from '../components/Foodpic'
import Ordercato from '../components/Ordercato'
import PopularResto from '../components/PopularResto'
import Countnum from '../components/Countnum'
import Footer from '../components/Footer'
import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import NavbarMob2 from '../MobileComoponents/NavbarMob2'
import HomeSearchMob from '../MobileComoponents/HomeSearchMob'
import OffMob from '../MobileComoponents/OffMob'
import RestoMob from '../MobileComoponents/RestoMob'
import RestoNameMob from '../MobileComoponents/RestoNameMob'
import ContactUsDesk from '../components/ContactUsDesk'
import AboutMob from '../MobileComoponents/AboutMob'
import HomeNavBar from '../components/HomeNavBar'

const Home = () => {


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
                    <div className="navbar">
                        <div className="navbar1">
                            <Navbar1 />
                        </div>
                        <div className="navbar2">
                            {/* <Navbar2 /> */}
                            <HomeNavBar/>
                        </div>

                    </div>

                    <div className="homepicture">
                        <img src="homepagepic1.jpg" alt="" />
                    </div>

                    <div className="ordersOffer">
                        <Order />
                    </div>

                    <div className="foodpicc">
                        <Foodpic />
                    </div>

                    <div className="ordcategory">
                        <Ordercato />
                    </div>

                    <div className="popularresto">
                        <PopularResto />
                    </div>



                    <div className="OrderingImg">
                        <img src="OrderingImg.png" alt="" />
                    </div>


                    <div className="Partners">
                        <img src="PartnersWithUS.png" alt="" />
                        <img src="RideWithUs.png" alt="" />
                    </div>

                    {/* <div className="about">
                        <HomeAbout />
                    </div> */}


                    <div className="contactUsDesk">
                        <ContactUsDesk />
                    </div>


                    <div className='Countn'>
                        <Countnum />
                    </div>

                    <div className="homefoot">
                        <Footer />
                    </div>


                </>


            ) : (

                <>

                    <div className="navbar1mobile">
                        <NavbarMob1 />
                    </div>

                    <div className="nav2mobile">
                        <NavbarMob2 />
                    </div>


                    <div className="addM">
                        <img src="Location.png" alt="" /> <span>Lution Street, N4G-00....</span>
                    </div>

                    <div className="homeMobileImg">
                        <HomeSearchMob />
                    </div>

                    <div className="offMob">
                        <OffMob />
                    </div>

                    <div className="restoMob">
                        <RestoMob />
                    </div>


                    <div className="ordcategorymob">
                        <Ordercato />
                    </div>


                    <div class="slgg">Popular Restaurants</div>


                    <div className="restonamesMob">
                        <RestoNameMob />
                    </div>


                    <div className="OrderingImgMobile">
                        <img src="OrderingImgMobile.jpeg" alt="" />
                    </div>


                    <div className="Partnerss">
                        <img src="PartnersWithUS.png" alt="" />
                        <img src="RideWithUs.png" alt="" />
                    </div>


                    <div className="aboutMob">
                        <AboutMob/>
                    </div>


                    <div className='CountnMob'>
                        <Countnum />
                    </div>


                    <div className="homefootMob">
                        <Footer />
                    </div>


                </>


            )}


        </>
    )
}

export default Home