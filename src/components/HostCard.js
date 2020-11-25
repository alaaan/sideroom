import React from 'react'

const HostCard = () => {
  return (
    <div className="host-card">
      <img className="host-card-img" src="https://www.fillmurray.com/200/200" />
      <div className="host-card-info">
        <h3 id="host-name">Brad Pitt</h3>
        <h3 id="host-genre">Actor</h3>
        <p id="host-price">$100</p>
      </div>
    </div>
  )
}

export default HostCard; 
