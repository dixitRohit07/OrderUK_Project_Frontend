import React from 'react'
import './Map.css'


const Map = () => {
    return (
        <>

            <div className="mapp">
                <div className="mmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79534.57490997705!2d-0.1442718!3d51.4681535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876043bce4bc6a9%3A0xf56153b69058f0da!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1733038606020!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="mapdiv">
                    <p className='map1'>McDonald’s</p>
                    <p className='map2'>South London</p>
                    <p className='map3'>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
                    
                    <p className='map4'>Phone number</p>
                    <p className='map5'>+934443-43</p>
                     <p className='map6'>Website</p>
                     <p className='map7'>http://mcdonalds.uk/</p>

                </div >
            </div>

        </>
    )
}

export default Map