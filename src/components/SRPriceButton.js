/** @jsxImportSource @emotion/react */
import React from 'react';
import SRButton from '../components/SRButton'
import { css, jsx} from "@emotion/react";


const SRPriceButton = ({clickHandler})=>{

  return (
    <div css={css`
    position:relative; 
    width: 70%;`}>
      <div
      className='price-button-price'
      css={css`
        border: 4px solid white;
        background:var(--darkblue);
        width:75px;
        height:75px;
        display:flex; 
        flex-direction:column; 
        justify-content:center; 
        align-items:center; 
        border-radius:50%; 
        max-width: 90px;
        max-height: 90px;
        position: absolute;
        top: -10%;
        z-index: 100;`}>

      <h2 
      css={css`font-size: 1.5rem;`}>$400</h2>
      </div>
      <SRButton onClick={clickHandler}>Let's do this</SRButton>
    </div>
  )

}

export default SRPriceButton; 