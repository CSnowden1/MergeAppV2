
import React, {Components} from 'react';
import "./BalanceCard.css";



 export const Cashout = (props) => {
    const person = props.name;
  return (
    <div className='cashout-box'>
        <div className='cashout-btn'>
            <h2>Cash Out</h2>
        </div>
    </div>
  );
}