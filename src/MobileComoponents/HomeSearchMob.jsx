import React from 'react';
import './HomeSearchMob.css'
const HomeSearchMob = () => {
  return (
    <div className='HomeSearchMobBox' >
      <span className='restm' >Order Restaurant food, takeaway and groceries.</span>
      <div className="headmob">

      <p className='feastmob' >Feast Your Senses,</p>
        <p className='fastmob' >Fast and Fresh</p>
      </div>
      <span className='postcodeMob' >Enter a postcode to see what we deliver</span>

        <div className="searchMob">
            <input className='searchMINMob' type="text" />
            <div className="sidearrowmob">
                <img src="Nextpage.png"  />
            </div>
        </div>

    </div>
  );
}

export default HomeSearchMob;