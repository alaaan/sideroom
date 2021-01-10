import React from 'react'; 

const FooterCard = ({children,title})=>{

  return(
    <div className="footer-card-container">
      <div className="footer-card">
        {children}
      </div>
      <div className="footer-subtitle">
        <h3 style={{textAlign:'center',marginTop:'3%'}}>{title}</h3>
      </div>  
    </div>
  )
}

export default FooterCard;