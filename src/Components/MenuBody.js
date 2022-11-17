import React from 'react'
import one from '../Assets/1.png'
import two from '../Assets/2.png'
import three from '../Assets/3.png'
import four from '../Assets/4.png'
import five from '../Assets/5.png'
import six from '../Assets/6.png'
import seven from '../Assets/7.png'
import eight from '../Assets/8.png'
import styled from 'styled-components'
import '../style.css'

const Fleximages = styled.div`
    padding: 10px;
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 80px;
       
`
const Imagecard = styled.div`
    width: 145px;
    margin: 0 auto;

img{
    width: 100%;
}

p{
    font-size: 1.04rem;
    text-align: center;
}
`

const body = [
    {
        image: one,
        title: 'Smashed Avo'
    },
    {
        image: two,
        title: 'Yin & Yang'
    },
    {
        image: three,
        title: 'Pancakes'
    },
    {
        image: four,
        title: 'Huevos Rancheros'
    },
    {
        image: five,
        title: 'Rancheros (Tofu)'
    },
    {
        image: six,
        title: 'Breakie Roll'
    },
    {
        image: seven,
        title: 'Breakie Roll'
    },
    {
        image: eight,
        title: 'Burrito'
    }
]
const foods = body && body.map((item)=>{
    return(
        <Imagecard key={item.title}>
        <img src={item.image} alt='card' />
        <p>{item.title}</p>
    </Imagecard>
    )
    })

const MenuBody = () => {
  return (
    
    <Fleximages>
        {foods}
    </Fleximages>
       
  )
}

export default MenuBody