import React from 'react'
import './Order.css'

const Order = () => {
  return (
  <>
  <div className="ord">

    <div className="line">
        Up to -40% 🎊 Order.uk exclusive deals
    </div>
    <div className="op">
        <button className='opbtn'>Vegan</button>
        <button className='opbtn'>Sushi</button>
        <button className='opbtn ' id='piz'>Pizza & Fast food</button>
        <button className='opbtn'>others</button>

    </div>
  </div>
  </>
  )
}

export default Order