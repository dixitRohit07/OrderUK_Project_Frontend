import React, { useState } from 'react'

import './ProductBodyAndCart.css'
import Dispic from './Dispic'
import Burgers from './Burgers'
import Fries from './Fries'
import Cold_Drinks from './Cold_Drinks'
import MyBasket from './MyBasket'

const ProductBodyAndCart = ({postCartData }) => {

  const [render,setRender] = useState(false)

  return (
    <div className='ProductBodyAndCartDesk'>

        <div className="ProductBodyAndCartDeskLeft">

            <Dispic/>

            <Burgers postCartData={postCartData} render={render} setRender={setRender}/>

            <Fries postCartData={postCartData} render={render} setRender={setRender}/>

            <Cold_Drinks postCartData={postCartData} render={render} setRender={setRender}/>

        </div>
        

        <div className="ProductBodyAndCartDeskRight">
            <MyBasket render={render}/>

        </div>




    </div>
  )
}

export default ProductBodyAndCart