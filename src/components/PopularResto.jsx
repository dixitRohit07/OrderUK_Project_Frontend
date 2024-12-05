import React from 'react'
import './PopularResto.css'
import {useNavigate} from 'react-router-dom'

const PopularResto = () => {


    const navigate = useNavigate()


    function onchangeProductPage (){
        navigate("/Product")
    }




  return (
    <div className='rest'>
        <div className="slg">
        Popular Restaurants
        </div>

        <div className="restorantss">

            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="macd.png" alt="" />
                <h3>McDonald’s London </h3>
            </div>

            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="john.png" alt="" />
                <h3>Papa Johns </h3>
            </div>


            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="kfc.png" alt="" />
                <h3>KFC West London </h3>
            </div>

            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="texas.png" alt="" />
                <h3>Texas Chicken</h3>
            </div>

            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="burgerKing.png" alt="" />
                <h3>Burger King </h3>
            </div>

            <div className="restoinfo">
                <img onClick={onchangeProductPage} src="shaurma.png" alt="" />
                <h3>Shaurma 1</h3>
            </div>


        </div>
    </div>
  )
}

export default PopularResto