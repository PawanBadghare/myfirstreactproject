import React, { Fragment, useState } from 'react'
import { Test } from './component/Test'
import Pawan from "./component/Pawan"
const App = () => {
  const [state, setState] =useState(0);
const[count,setCount]=useState(0)
  return (
    <Fragment>
    <button className='pawan' id='pawan2' onClick={() => {setState(state+10)}}>
    <Test />
    <Pawan />
    {state}
    </button>
    <button className='tend' id='tend2'onClick={()=> {setCount(count-20)}}>{count}</button>
    <input type='text' />
    </Fragment>
  )
}

export default App
