import React from 'react'
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
    @media(max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
    
    }      
    @media(max-width: 540px){
        width: 100%;
        grid-template-columns: 1fr 1fr;
        position: relative;
        top: 120px;
        gap: 25px;
    }  

`
const Imagecard = styled.div`
    width: 145px;
    margin: 0 auto;
    cursor: pointer;
    
    img{
        width: 100%;
    }
    
    p{
        font-size: 1.04rem;
        text-align: center;
    }
    @media(max-width: 540px){
        p{
            font-size: 1.1rem;
            
        }
        width: 100%;
        // background: red;
    }
`



const MenuBody = ({body}) => {
    const foods = body && body.map((item, index)=>{
        return(
            <Imagecard key={index}>
            <img src={item.image} alt='food-item' />
            <p>{item.title}</p>
        </Imagecard>
        )
        })
  return (
    
    <Fleximages>
        {foods}
    </Fleximages>
       
  )
}

export default MenuBody