import React,{useState,useEffect} from 'react'
import GlowyBox from '../components/GlowyBox'
import gsap from 'gsap';

const TalentCalculator = () =>{

  useEffect(() => {

    //animations

    let tl=gsap.timeline();
    tl.to('.earnings',{scale:1.05,repeat:-1,yoyo:true,duration:1});

  }, []);

  const [earnings,setEarnings] = useState(5000);
  const [price,setPrice] = useState(100);
  const [qty,setQty] = useState(10);

  const formatCurrency = (number) =>{
    return (`$${number}`);
  }

  const handlePriceChange = (e)=>{
    setPrice(e.target.value)
    setEarnings(qty*e.target.value*4);
    
    
  }

  const handleQtyChange = (e)=>{
    setQty(e.target.value)
    setEarnings(price*e.target.value*4);
  }

  return(
  <GlowyBox boxWidth='400px' boxHeight='200px'>
    <div className="talent-calc-banner">
      <h2 style={{fontSize:'2rem'}}>Earn <span className="earnings" style={{display:'inline-block',fontSize:'2.5rem',color:'var(--mainblue)'}}>{formatCurrency(earnings)}</span> per month video calling your fans</h2>
    </div>

    <div>
      {/* <h2 style={{color:'var(--pink)',display:'inline',fontSize:'2.3rem'}}>$100</h2>  */}
      
      <input className="calculator-input" type='text' onChange={handlePriceChange} value={price}></input>
      for a 2 minute call
    </div>
    <div>
      Call 
      {/* <h2 style={{color:'var(--pink)',display:'inline',fontSize:'2.3rem'}}>10</h2>  */}
      <input className="calculator-input" type='text' onChange={handleQtyChange} value={qty}></input>
      fans a week
    </div>

  </GlowyBox>
  )
}

export default TalentCalculator; 