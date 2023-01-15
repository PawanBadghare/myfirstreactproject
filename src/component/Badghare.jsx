import React from 'react'
import '../component/style/Badghare.css';
import Dog from '../assets/One.jpg'
const Badghare = () => {
  return (
    <div className='Badghare-div'> 
     <Display>  </Display>   
     <p>All types of practical book available</p>    
     <h1>mesages</h1>
     <img src={Dog} alt='img'/>
     <img src={Dog} alt='img'/>
     <button> on click</button>
     <button> on clicl top</button>   
    </div>
  )
}

export default Badghare


