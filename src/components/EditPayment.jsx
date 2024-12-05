import React from 'react';
import './EditPayment.css';



const EditPayment = ({setSelectEditPay,editpayment}) => {

    function handleBackProfile(){
        setSelectEditPay(true)
    }

    function handleSaveChanges(){
        setSelectEditPay(true)
    }


    

    return (
        // <div className="payBox">
            <div className="paycontainer">
                <p>Edit Payment Method</p>

                <div className="cardinfo">
                    <div className="cardINP">
                        <label htmlFor="CardNumber">Card Number</label>
                        <input type="text" placeholder={editpayment.number} />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="Expiration">Expiration</label>
                        <input type="text" />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="CVC">CVC</label>
                        <input type="text" />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="CardName">Name on Card</label>
                        <input type="text" placeholder={editpayment.name}/>
                    </div>
                </div>

                <div className="methFooter" style={{fontSize:"1.3rem"}}>
                    <span className="methfootl" style={{backgroundColor: "rgba(102, 55, 0, 1)", padding:"1rem 2rem",marginLeft:"1rem", borderRadius:"12px", fontSize:"1.3rem", color:"white"}}>Remove</span>
                    <span className="methfootr">
                        <span onClick={handleBackProfile} className="cancel">Cancel</span>
                        <span onClick={handleSaveChanges} style={{backgroundColor: "white", padding:"1rem 1rem", marginLeft:"0.5rem",marginRight:"0.5rem",borderRadius:"0.8rem"}} className="sChange">Save Changes</span>
                    </span>
                </div>
            </div>
        // </div>
    );
};

export default EditPayment;
