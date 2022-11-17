import React from 'react'
import { Link } from 'react-router-dom'
import home from '../Assets/home.png'
import styled from 'styled-components'
import Button from '../Components/Button'
import HomeTitle from '../Components/HomeTitle'
import '../style.css'

const HomeStyles = styled.div`
background-image: url(${home});
background-position: center;
width: 100%;
height: 100vh;
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

ul{
display: flex;
width: 42%;
justify-content: space-between;
align-items: center;
margin-top: 45px;
}
`

const Homepage = () => {
  return (
    <HomeStyles>
               <HomeTitle />
        <ul>
            <Link to='/menu'><Button text={'Menu'}/></Link>
            <Link to='/cart'><Button text={'Cart'}/></Link>
           
        </ul>
    </HomeStyles>
  )
}

export default Homepage