import React from 'react'
import {text,view} from'react-nagative';
import {Header} from './Header';
import {heading} from './Typography'
const amar = () => {
  return (
    <div>
    <Header title='welcome to react native'/>
    <text style={heading}></text>
    </div>
  )
}

export default amar