import React from 'react';
import "./UserDetails.scss";

function UserDetails({name, email, plan, expiry,renewal}) {
  return (
   <>
    <div className="details-user">
        <div className="top-title">
            <p>User Details</p>
        </div>
        <div className="items">
            <div className="item">
                <p>Name</p>
                <p>{name}</p>
            </div>
            <div className="item">
                <p>Email adress</p>
                <p>{email}</p>
            </div>
            <div className="item">
                <p>Plan</p>
                <p>{plan}</p>
            </div>
            <div className="item">
                <p>Expiry Date</p>

                <p>{expiry}</p>
            </div>
            <div className="item">
                <p>Auto Renewal</p>
                <p>{renewal}</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default UserDetails