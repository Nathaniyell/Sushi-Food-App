import React from 'react'
import MenuBody from '../Components/MenuBody'
import Navbar from '../Components/Navbar'
import '../style.css'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

@media(max-width: 540px){
height: 100%;
// background: blue;
width: 100%;
gap: 10px;
flex-direction: column;
justify-content: space-between;
} 

`
const Title = styled.h1`
    display: inline-block;
    position: absolute;
    left: 300px;
    top: 20px;
    border-bottom: 4px solid #f1d5bb;
    @media(max-width: 540px){
      display: grid;
      place-items: center;
      position: relative;
      left: 0;
      top: 100px;
      // background: blue;
    }
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
  @media(max-width: 540px){
    left: 0;
    display: grid;
    place-items: center;
    position: relative;
    bottom: -150px;
    margin: 0 auto;
  }
`


const Menu = ({ data, onclickFunction }) => {

  return (
    <div className='wrapper'>
    <Title>SUSHI FOOD</Title>
    <Wrapper>
    <Navbar />
    <MenuBody body={data} />
    </Wrapper>
    {data.length <= 8 && <Btn onClick={onclickFunction}>Load More</Btn>}
    {/* <Btn onClick={onclickFunction}>Load More</Btn> */}
    </div>
  )
}

export default Menu