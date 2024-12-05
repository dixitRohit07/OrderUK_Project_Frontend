import React from 'react'
import './CheckOutNavbar2.css'



const CheckOutNavbar2 = () => {
    return (
        <>
            <div className="nav2">

                <div className="nav2div1">
                    <img src="LOGO.png" alt="" />
                </div>

                <div className="nav2div2">
                    <button className='nav2btn'>Home</button>
                    {/* <button className='browsebtn nav2btn'> Browse Menu</button> */}
                    <button className='specialbtn nav2btn'> Special Offers</button>
                    <button id='checkresto'>Restaurants</button>
                    <button className='trackbtn nav2btn'>Track Order</button>


                </div>

                <div className="nav2div3">

                    <div className='nav2button'>
                        <img src="Male User.png" alt="" />
                        <span>Hey Mike</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CheckOutNavbar2