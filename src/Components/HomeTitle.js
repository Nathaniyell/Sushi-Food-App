import React from 'react'
import styled from 'styled-components'
import '../style.css'

const Styling = styled.div`
color: #fff;
margin: 0 auto;
text-align: center;
h1{
    font-size: 85px;
    line-height: 1.5;
  }
  p{
    font-size: 22px;
  }
`

const HomeTitle = () => {
  return (
    <Styling>
        <h1>Welcome to <strong>Sushi</strong> Restaurant</h1>
        <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>
    </Styling>
  )
}

export default HomeTitle