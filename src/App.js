import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Homepage from './Pages/Homepage';
import Menu from './Pages/Menu';
import one from './Assets/1.png'
import two from './Assets/2.png'
import three from './Assets/3.png'
import four from './Assets/4.png'
import five from './Assets/5.png'
import six from './Assets/6.png'
import seven from './Assets/7.png'
import eight from './Assets/8.png'


function App() {
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
  const [foodList, setfoodList] = useState(body)
  const updateFoodList = ()=>{
    setfoodList((prevList)=>{
        let addMoreFood = foodList.push(body[1], body[5], body[7], body[2])
        // console.log(addMoreFood)
        return[...prevList, addMoreFood]
    })
  }
  return (
    <div>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='menu' element={<Menu data={foodList} onclickFunction={updateFoodList} />} />
      <Route path='cart' element={<Cart />} />
     </Routes>
     
    </div>
  );
}

export default App;
