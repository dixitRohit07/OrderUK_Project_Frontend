import React, { useEffect, useState } from 'react'
import './Burgers.css'
import {BASE_URL} from '../services/helper'


const Burgers = ({postCartData,setRender,render}) => {

    const [bugerdata, setBurgerData] = useState([]);



    const getbugerInfo = async () => {

        const result = await fetch(`${BASE_URL}/api/auth/productInfo`, {
            method: "GET"
        })

        // console.log(result);

        if (result.ok) {
            const data = await result.json()

            // console.log(data);

            setBurgerData(data.msg)

        }

    }




    const  handleCollectData = (e)=> {

        setRender(!render)
        // console.log(e);
        postCartData(e)

        // getCartData()

        
        
    }  

    


    useEffect(() => {

        getbugerInfo()

    }, [])


    // console.log(bugerdata);




    return (
        <>
            <div className="burgerr">
                <h1>Burgers</h1>
            </div>

            <div className="bugercards">
                

                {
                    bugerdata.map((e) => (

                        <>

                            <div className="card1">
                                <div className="cardl">
                                    <p className='lp1'>{e.title}</p>
                                    <p className='lp2'>{e.info}</p>
                                    <p className='lp3'>₹ {e.price}</p>
                                </div>

                                <div className="cardr">
                                    <img className='rimg' src="Rectangle 46.png" alt="" />

                                    <img className='rwhite' src="Rectangle 47.png" alt="" />
                                    <img onClick={()=>handleCollectData(e) } className='rplus' src="Plus.png" alt="" />


                                </div>
                            </div>

                        </>

                    ))


                }


            </div>

        </>
    )
}

export default Burgers