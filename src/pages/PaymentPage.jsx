import React, { useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import ChooseAndPAy from '../components/ChooseAndPAy'
import NavbarMob1 from '../MobileComoponents/NavbarMob1'
import Footer from '../components/Footer'
import PaymentSuccessMsg from '../components/PaymentSuccessMsg'

const PaymentPage = () => {


    const [paymentSucessPage, setPaymentSucessPage] = useState(true)



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





                    < div className="checkOutNavbar1">
                        <Navbar1 />
                    </div >

                    <div className="checkOutNavbar2">
                        {/* <CheckOutNavbar2 /> */}
                        <Navbar2 />
                    </div>

                    {paymentSucessPage ? (
                        <>
                            <div className="choosepayment">
                                <ChooseAndPAy setPaymentSucessPage={setPaymentSucessPage} />
                            </div>

                        </>

                    ) : (
                    <>

                        <PaymentSuccessMsg />

                    </>)}


                    <div className="addressFooter">
                        <Footer />
                    </div>


                </>

            ) : (

                <>

                    <div className="navbar1mobile">
                        <NavbarMob1 />
                    </div>



                    {paymentSucessPage ? (
                        <>
                            <div className="choosepayment">
                                <ChooseAndPAy setPaymentSucessPage={setPaymentSucessPage} />
                            </div>

                        </>

                    ) : (
                    <>

                        <PaymentSuccessMsg />

                    </>)}

                    {/* <div className="choosepayment">
                        <ChooseAndPAy />
                    </div> */}

                </>

            )}







        </>
    )
}

export default PaymentPage