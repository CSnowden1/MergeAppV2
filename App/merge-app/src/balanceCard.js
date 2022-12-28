
import React, {Components} from 'react';
import "./BalanceCard.css";



 export const BalanceCard = (props) => {
    const person = props.name;
  return (
    <div>
      <div className="card-box">
        <h2>Balance</h2>
        <div className='balance-box'>
            <h3>$19,264</h3>
            <div>[]</div>
        </div>
       
      </div>
    </div>
  )
}