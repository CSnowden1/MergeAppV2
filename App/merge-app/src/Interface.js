
import React, {Components} from 'react';
import "./BalanceCard.css";



 export const Interface = (props) => {
    const person = props.name;
  return (
    <div className='interface-box'>
        <div className="interface-btn-box">
            <h2>[]</h2>
        </div>
        <div className='interface-btn-box'>
            <h2>[]</h2>
        </div>
        <div className='interface-btn-box'>
            <h2>[]</h2>
        </div>
    </div>
  );
}