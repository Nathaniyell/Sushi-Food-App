import React from 'react'
import styled from 'styled-components'
import house from '../Assets/house.svg'
import menuIcon from '../Assets/menu.svg'
import Scart from '../Assets/Scart.svg'
import locate from '../Assets/location.svg'
import exit from '../Assets/Exit.svg'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
display: flex;
height: 90vh;
background: #0C0B0B;
border-radius: 20px;
position: fixed;
left: 80px;
top: 20px;
box-shadow: 8px 8px 8px rgba(0,0,0, 0.3);
flex-direction: column;
align-items: center;
justify-content: space-around;



h1{
    font-weight: 800;
    font-size: 64px;
    color: #f1d5bb;
    padding: 10px;
}
.menu-img{
    background: #f1d5bb;
   padding: 10px 20px;
    text-align: center;
}
`



const Navbar = () => {
  return (
    <>
        <NavBar>
            <h1>S.</h1>
            <Link to='/'><img src={house} alt='home' title='Home'/></Link>
            <Link to='/menu'><img src={menuIcon} alt='menu' title='Menu' className='menu-img' /></Link>
            <Link to='/cart'><img src={Scart} alt='cart' title='Cart'/></Link>
            <Link to='/'><img src={locate} alt='location' title='Location' /></Link>
            <Link to='/'><img src={exit} alt='exit' title='Exit'/></Link>
        </NavBar>
    </>
  )
}

export default Navbar