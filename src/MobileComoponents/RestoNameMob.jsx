import React from 'react';
import '../MobileComoponents/RestoNameMob.css'
import {useNavigate} from 'react-router-dom'

const RestoNameMob = () => {

  
  const navigate = useNavigate()


  function onchangeProductPage (){
      navigate("/Product")
  }
  return (
    <div className='restonamessMob' >
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="macdd.png" alt="" />
      </div>


      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="papajohn.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="kfcc.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="texass.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="burgerkingg.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="shaurmaa.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="kfcc.png" alt="" />
      </div>
      <div className="restonamessboxMob">
        <img onClick={onchangeProductPage} src="texass.png" alt="" />
      </div>

     

    </div>
  );
}

export default RestoNameMob;