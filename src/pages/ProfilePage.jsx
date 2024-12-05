import React, { useEffect, useState } from 'react'
import './ProfilePage.css'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import ProfileBody from '../components/ProfileBody'
import NavbarMob1 from '../MobileComoponents/NavbarMob1'


const ProfilePage = () => {




  const getScreenWidth = () => {
    return {
      width: window.innerWidth
    }
  }


  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    const Width = () => {
      setScreenWidth(getScreenWidth());
    }
    window.addEventListener('resize', Width);
  }, []);




  return (
    <>


      {screenWidth.width > 768 ? (

        <>

          < div className="checkOutNavbar1">
            <Navbar1 />
          </div >

          <div className="checkOutNavbar2">
            {/* <CheckOutNavbar2 /> */}
            <Navbar2 />
          </div>


          <div className="profBody">
            <ProfileBody />
          </div>



          <div className="profFooter">
            <Footer />
          </div>

        </>

      ) : (

        <>

          <div className="navbar1mobile">
            <NavbarMob1/>
          </div>


           <div className="profBody">
            <ProfileBody />
          </div>

        </>

      )}


    </>



  )
}

export default ProfilePage