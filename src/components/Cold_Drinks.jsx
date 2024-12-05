import React, { useEffect, useState } from 'react'
import './Cold_Drinks.css'
import { BASE_URL } from '../services/helper'

const Cold_Drinks = ({ postCartData, setRender, render }) => {

    const [coldDrinkData, setColdDrinkData] = useState([]);


    const getcoldDrinksInfo = async () => {

        const response = await fetch(`${BASE_URL}/api/auth/coldDrinksDetails`, {
            method: "GET"
        })

        console.log("resultresponse", response);



        if (response.ok) {
            const data = await response.json()

            console.log(data);

            setColdDrinkData(data.msg)

        }


    }

    const handleCollectData = (e) => {
        setRender(!render)
        postCartData(e)


    }


    useEffect(() => {

        getcoldDrinksInfo();

    }, [])


    console.log("colddd", coldDrinkData);




    return (
        <>
            <div className="friesss">
                <h1>Cold Drinks</h1>
            </div>

            <div className="bugercards">

                {coldDrinkData.map((e) => (

                    <>

                        <div className="card1">
                            <div className="cardl">
                                <p className='lp1'>{e.title}</p>
                                <p className='lp2'>{e.info}</p>
                                <p className='lp3'>₹{e.price}</p>
                            </div>
                            <div className="cardr">
                                <img className='rimg' src="Rectangle 46 (7).png" alt="" />

                                <div className="pluse">
                                    <img className='rwhite' src="Rectangle 47.png" alt="" />
                                    <img onClick={() => handleCollectData(e)} className='rplus' src="Plus.png" alt="" />
                                </div>
                            </div>
                        </div>



                    </>


                ))}


                {/* <div className="card1">
                    <div className="cardl">
                        <p className='lp1'>The classics for 3</p>
                        <p className='lp2'>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</p>
                        <p className='lp3'>₹ 40</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (8).png" alt="" />

                        <div className="pluse">
                            <img className='rwhite' src="Rectangle 47.png" alt="" />
                            <img className='rplus' src="Plus.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="cardl">
                        <p className='lp1'>The classics for 3</p>
                        <p className='lp2'>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</p>
                        <p className='lp3'>₹ 40</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (9).png" alt="" />

                        <div className="pluse">
                            <img className='rwhite' src="Rectangle 47.png" alt="" />
                            <img className='rplus' src="Plus.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="cardl">
                        <p className='lp1'>The classics for 3</p>
                        <p className='lp2'>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</p>
                        <p className='lp3'>₹ 40</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (10).png" alt="" />

                        <div className="pluse">
                            <img className='rwhite' src="Rectangle 47.png" alt="" />
                            <img className='rplus' src="Plus.png" alt="" />
                        </div>
                    </div>
                </div> */}


            </div>
        </>
    )
}

export default Cold_Drinks