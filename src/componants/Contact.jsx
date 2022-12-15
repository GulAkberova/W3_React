import React from 'react'
import map from '../assets/map.jpg'

function Contact() {
  return (
 <div>
   <div class="w3-container w3-padding-32" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
    <p>Lets get in touch and talk about your next project.</p>
    <form>
      <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
      <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
      <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
      <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
      <button class="w3-button w3-black w3-section" type="submit">
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
  </div>
  
<div class="w3-container">
  <img src={map} class="w3-image" style={{width:"100%"}}/>
</div>

</div>

   
  )
}

export default Contact