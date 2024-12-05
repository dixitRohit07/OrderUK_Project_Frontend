import React from 'react'
import './Navbar1.css'

const Navbar1 = ({setAccessCart}) => {


    function handleAccessCart ()  {

        setAccessCart(true)


    }
    return (
        <div className='nav1'>

            <div className="div1">
                <img src="star.png" alt="" />
                <span> Get 5% Off your first order,</span>
                <span className='promoorg'> Promo: ORDER5</span>
            </div>

            <div className="div2">
                <img src="Location.png" alt="" />
                <span> Regent Street, A4, A4201, London</span>
                <span className='locationorg'> Change Location</span>
            </div>

            <div className="div3">
                <div onClick={handleAccessCart} className='mycart'>
                    <img src="Full Shopping Basket.png" alt="" />
                    My Cart
                </div>
                <div className='blank'></div>
                <div className='arrow'>
                    <img src="Forward Button.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Navbar1