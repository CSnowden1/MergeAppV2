
import React, {Components} from 'react';
import "./topNav.css";
import { SocialCard } from './SocialCard';



 export const SocialCardSection = (props) => {
    const person = props.name;
  return (
      <div className="social-section">
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </div>
  
  )
}

