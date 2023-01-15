import React from 'react'
import '../component/style/Teacher.css';
import Dog from '../assets/One.jpg'
const Teacher = () => {
  const onClickHandler = () => {
    console.log('Hi')
  }
  return (
  <div className='teacher-main-div'>
    <h1>free connection</h1>
    <p> nice book</p>
    <button> on click</button>
    <button> off click</button>  
    <button onClick={onClickHandler}> on click</button>
    <button> off click</button>
    <button> off click</button>
    <img src={Dog} alt='downfxfxufxhfcjfximg' width={250} height={250}/>
  </div>  
  )
}

export default Teacher