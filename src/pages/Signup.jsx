import React from 'react'
import Login from '../components/Login'
import Footer from '../components/Footer'
import SignupCompo from '../components/SignupCompo'

const Signup = () => {
  return (
    <div className="main">

        <div className="container">

          <div className="login">
            <SignupCompo/>
          </div>

          <div className="image">

            <img src="Art.png" alt="" />

          </div>


        </div>
        

        <div className="footer">
          <Footer/>
        </div>

      </div>


  )
}

export default Signup