import React, { useEffect, useState } from 'react';
import './AddAdress.css'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../services/helper'

const AddAdress = ({setSelectAddress}) => {

  const navigate = useNavigate()



  const [addressData, setAddressData] = useState({

    address: "",
    number: ""
  })


  function handleOnchange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setAddressData({
      ...addressData,
      [name]: value
    })
  }

  

  async function handleSave(e) {
    e.preventDefault()

    // navigate("*AddressAdd")
    setSelectAddress(true)

    const response = await fetch(`${BASE_URL}/api/auth/addressPost`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(addressData)
    });

  }


  return (
    <div className='AddAdress'>
      <div className="asasc">
        <div className="asd">
          <img src="location.png" alt="" />
          <span>Add Address</span>
        </div>
        <div className="state">
          <input onChange={handleOnchange} type="text" placeholder='State' />
          <input onChange={handleOnchange} type="text" placeholder='City/District' />
          <input onChange={handleOnchange} type="text" placeholder='Pin Code' />
          <input onChange={handleOnchange} type="text" name='number' placeholder='Phone Number' />
        </div>
        <textarea onChange={handleOnchange} name="address" id="" cols="30" rows="10" placeholder='Enter full address' ></textarea>
        <div className='btnnn'><button onClick={handleSave} >Save</button></div>
      </div>
    </div>
  );
}

export default AddAdress;