import React from 'react'
import styled from 'styled-components'
import '../style.css'

const Buttons = styled.button`
    background-color: #fff;
    color: #000;
    border: none;
    width: 250px;
    height: 80px;
    font-size: 30px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
   `
const Button = ({text}) => {
  return (
    <div>
        <Buttons>{text}</Buttons>
    </div>
  )
}

export default Button