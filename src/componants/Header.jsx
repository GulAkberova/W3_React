import React from 'react'
import img1 from "../assets/architect.jpg"

function Header() {
  return (
    <div>
<div className="w3-top">
  <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>
    <div className="w3-right w3-hide-small">
      <a href="#projects" className="w3-bar-item w3-button">Projects</a>
      <a href="#about" className="w3-bar-item w3-button">About</a>
      <a href="#contact" className="w3-bar-item w3-button">Contact</a>
    </div>
  </div>
</div>
<header className="w3-display-container w3-content w3-wide" style={{maxWidth:'1500px'}} id="home">
  <img className="w3-image" src={img1} alt="Architecture" width={1500} height={800}/>
  <div className="w3-display-middle w3-margin-top w3-center">
    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span></h1>
  </div>
</header>

    </div>
  )
}

export default Header