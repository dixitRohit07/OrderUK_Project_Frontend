import React from "react";
// import "./RestoM.css";
import '../MobileComoponents/RestoMob.css'
const RestoMob = () => {
  return (
    <div className="restboxMob">
      <div className="restoMobbox">
        <img src="Group8.png" alt="" />
        <div className="restoMobspan">
        <span className="ResttMob" >Restaurant</span>
        <h5>Butterbrot Caf’e London</h5>
        </div>
        
      </div>
      <div className="restoMobbox">
        <img src="Group7.png" alt="" />
        <div className="restoMobspan">
        <span  className="ResttMob" >Restaurant</span>
        <h5>Grand Caf’e </h5>
        </div>
      </div>
      <div className="restoMobbox">

        <img src="Group8.png" alt="" />
        <div className="restoMobspan">
        <span className="ResttMob" >Restaurant</span>
        <h5>Butterbrot Caf’e London</h5>
        </div>
      </div>
    </div>
  );
};

export default RestoMob;