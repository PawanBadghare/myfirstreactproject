import React, { Fragment } from 'react'
import Pawanjsx from './component/Pawanjsx';
// import Pawan from './component/Pawanjsx';
const App = () => {
  console.log("hi")
//   const [state, setState] =useState(0);
// const[count,setCount]=useState(0)
  return (
    <Fragment>
      {/* <Practice /> */}
    {/* <button className='pawan' id='pawan2' onClick={() => {setState(state+10)}}>
    {state}
    </button> */}
    <Pawanjsx />
    {/* <Pawan /> */}
    {/* <button className='tend' id='tend2'onClick={()=> {setCount(count-20)}}>{count}</button> */}
    {/* <input type='text' /> */}
    </Fragment>
  )
}

export default App
