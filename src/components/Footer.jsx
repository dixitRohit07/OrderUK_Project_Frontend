import React from 'react'
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer">

            <div className="foot1">

                <div className='box1'>

                    <div className='logo2'>
                        <img src="LOGO 2.png" alt="" />
                    </div>

                    <div className='app2'>
                        <img src="app-store-badges-en 1.png" alt="" />
                    </div>

                    <p>Company # 490039-445, Registered with <br /> House of companies.</p>


                </div>
                <div className='box2'>
                    <div>
                        <h3>Get Exclusive Deals in your Inbox</h3>
                    </div>

                    <div className='box2text'>
                        <input className='boxinput' type="text" placeholder='youremail@gmail.com'/>
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <div>
                        <p>we wont spam, read our email policy</p>
                    </div>

                    <div>
                        <img src="Facebook.png" alt="" />
                        <img src="Instagram.png" alt="" />
                        <img src="TikTok.png" alt="" />
                        <img src="Snapchat.png" alt="" />

                    </div>

                </div>

                <div className='box3'>

                    <div className="leftt">

                        <h3 className='leffth3'>Legal Pages</h3>
                        <div>
                            <li>
                                Terms and conditions
                            </li>
                            <li>
                                Privacy
                            </li>
                            <li>
                                Cookies
                            </li>
                            <li>
                                Modern Slavery Statement
                            </li>
                        </div>

                    </div>

                    <div className="right">

                        <h3 className='righth3'>Important Links</h3>
                        <div>
                            <li>
                                Get help
                            </li>
                            <li>
                                Add your restaurant
                            </li>
                            <li>
                                Sign up to deliver
                            </li>
                            <li>
                                Create a business account
                            </li>
                        </div>

                    </div>

                </div>
            </div>

            <div className="foot2">

                <div>
                    Order.uk Copyright 2024, All Rights Reserved.
                </div>

                <div className='foot2term'>
                    <span>
                        Privacy Policy
                    </span>
                    <span>
                        Terms
                    </span>
                    <span>
                        Pricing
                    </span>
                    <span>
                        Do not sell or share my personal information
                    </span>
                </div>



            </div>

        </div>
    )
}

export default Footer