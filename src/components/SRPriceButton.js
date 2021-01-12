import React from 'react';
import SRButton from '../components/SRButton'
import { render } from 'react-dom';

const SRPriceButton = ({clickHandler})=>{

  return (
    <div className="price-button-container">
      <div className="price-button-price">
      <h2>$400</h2>
      </div>
      <SRButton onClick={clickHandler}>Let's do this</SRButton>
    </div>
  )

}

export default SRPriceButton; 