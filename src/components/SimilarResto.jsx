import React from 'react'
import './SimilarResto.css'
const SimilarResto = () => {
  return (
    <>
    <div className='rest'>
        <div className="slg">
        Similar Restaurants
        </div>

        <div className="restorantss">

            <div className="restoinfo">
                <img src="macd.png" alt="" />
                <h3>McDonald’s London </h3>
            </div>

            <div className="restoinfo">
                <img src="john.png" alt="" />
                <h3>Papa Johns </h3>
            </div>


            <div className="restoinfo">
                <img src="kfc.png" alt="" />
                <h3>KFC West London </h3>
            </div>

            <div className="restoinfo">
                <img src="texas.png" alt="" />
                <h3>Texas Chicken</h3>
            </div>

            <div className="restoinfo">
                <img src="burgerKing.png" alt="" />
                <h3>Burger King</h3>
            </div>

            <div className="restoinfo">
                <img src="shaurma.png" alt="" />
                <h3>Shaurma 1 </h3>
            </div>


        </div>
    </div>
    </>
  )
}

export default SimilarResto