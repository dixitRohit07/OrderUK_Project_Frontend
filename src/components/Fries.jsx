import React, { useEffect, useState } from 'react'
import './Fries.css'
import {BASE_URL} from '../services/helper'

const Fries = ({postCartData,setRender,render}) => {


    const [friesData, setFriesData] = useState([]);

    const getfriesInfo = async () => {

        const result = await fetch(`${BASE_URL}/api/auth/friesDetails`, {
            method: "GET"
        })


        if (result.ok) {
            const data = await result.json()

            // console.log(data);

            setFriesData(data.msg)

        }
    }

    const handleCollectData = (e)=>{
        setRender(!render)

        // console.log(e);

        postCartData(e)
       

        
    }


    useEffect(() => {

        getfriesInfo();

    }, [])


    console.log(friesData);






    return (
        <>
            <div className="friesss">
                <h1>Fries</h1>
            </div>

            <div className="bugercards">

                {friesData.map((e) => (

                    <>

                        <div className="card1">
                            <div className="cardl">
                                <p className='lp1'>{e.title}</p>
                                <p className='lp2'>{e.info}</p>
                                <p className='lp3'>₹{e.price}</p>
                            </div>
                            <div className="cardr">
                                <img className='rimg' src="Rectangle 46 (3).png" alt="" />

                                <div className="pluse">
                                    <img className='rwhite' src="Rectangle 47.png" alt="" />
                                    <img onClick={()=>handleCollectData(e) } className='rplus' src="Plus.png" alt="" />
                                </div>
                            </div>
                        </div>


                    </>

                ))}


                {/* <div className="card1">
                    <div className="cardl">
                        <p className='lp1'>The classics for 3</p>
                        <p className='lp2'>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</p>
                        <p className='lp3'>₹ 70</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (4).png" alt="" />

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
                        <p className='lp3'>₹ 70</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (6).png" alt="" />

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
                        <p className='lp3'>₹ 70</p>
                    </div>
                    <div className="cardr">
                        <img className='rimg' src="Rectangle 46 (5).png" alt="" />

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

export default Fries