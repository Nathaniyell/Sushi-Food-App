import React from 'react'
import MenuBody from '../Components/MenuBody'
import Navbar from '../Components/Navbar'
import '../style.css'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Title = styled.h1`
    display: inline-block;
    position: absolute;
    left: 300px;
    top: 20px;
    border-bottom: 4px solid #f1d5bb;
`
const Btn = styled.button`
  background: #000;
  color: #fff;
  border: none;
  position: absolute;
  bottom: 25px;
  left: 620px;
  outline: none;
  width: 130px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`


const Menu = () => {
  return (
    <div className='wrapper'>
    <Title>SUSHI FOOD</Title>
    <Wrapper>
    <Navbar />
    <MenuBody />
    </Wrapper>
    <Btn>Load More</Btn>
    </div>
  )
}

export default Menu