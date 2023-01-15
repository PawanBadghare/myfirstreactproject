import React, { Fragment } from 'react'
import { Badghare } from './component/Badghare';
import Pawanjsx from './component/Pawanjsx';
import Reactext3 from './component/React';
import Test from './component/test';
import Reactext4 from './component/test';
import Pawa3 from './pawan2/Pawa3';
// import Pawan from './component/Pawanjsx';
const App = () => {
  console.log("hi")
//   const [state, setState] =useState(0);
// const[count,setCount]=useState(0)
  return (
@@ -12,8 +15,11 @@ const App = () => {
    {/* <button className='pawan' id='pawan2' onClick={() => {setState(state+10)}}>
    {state}
    </button> */}
    <Reactext3></Reactext3>
    {/* <Reactext3></Reactext3> */}
    <Pawanjsx />
    <Badghare></Badghare>
    {/* <Pawa3></Pawa3> */}
    <Test></Test>
    {/* <Pawan /> */}
    {/* <button className='tend' id='tend2'onClick={()=> {setCount(count-20)}}>{count}</button> */}
    {/* <input type='text' /> */}