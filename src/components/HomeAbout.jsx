import React from 'react'
import './HomeAbout.css'

const HomeAbout = () => {
    return (
        <>
            <div className="aboutt">

                <div className="aboutnav">

                    <h2>Know more about us!</h2>

                    <div className="spa">

                        <span className="freq">Frequent Questions </span>
                        <span>Who we are?  </span>
                        <span>Partner Program</span>
                        <span>Help & Support</span>

                    </div>

                </div>

                <div className="aboutbox">

                    <div className="work">

                        <div className='uk'>How does Order.UK work?</div>

                        <p>What payment methods are accepted?</p>
                        <p>Can I track my order in real-time?</p>
                        <p>Are there any special discounts or promotions available?</p>
                        <p>Is Order.UK available in my area?</p>

                    </div>


                    <div className="boxxx">



                        <div className="boxx">

                            <div className="boxx1">

                                <p className='boxxpp'>Place an Order!</p>
                                <div>
                                    <img src="order-food 1.png" alt="" />
                                </div>
                                <p className='boxx1p'>Place order through our website or Mobile app</p>


                            </div>

                            <div className="boxx1">

                                <p className='boxxpp'>Track Progress</p>
                                <div>
                                    <img src="food 1.png" alt="" />
                                </div>
                                <p className='boxx1p' >Your can track your order status with delivery time</p>


                            </div>

                            <div className="boxx1">

                                <p className='boxxpp'>Track Progress</p>
                                <div>
                                    <img src="order 1.png" alt="" />
                                </div>
                                <p className='boxx1p'>Your can track your order status with delivery time</p>


                            </div>


                        </div>

                        <p className='longp'>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>

                    </div>


                </div>


            </div>

        </>
    )
}

export default HomeAbout