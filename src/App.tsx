import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
import { Counter } from './components/Counter'
import { List } from './components/List'
import type { ListItems } from './types'
import { OrderForm } from './components/OrderForm'


const  menu  : ListItems[] = [
  {
    id:1,name:"product1",price:100
  },
  {
    id:2,name:"product2",price:100
  },
  {
    id:3,name:"product2",price:100
  },
]
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Card name='Product' price={400} isAvailable={true}/>
     <Counter/>
     <List items={menu} />
     <OrderForm onSubmit={(order)=>{
             console.log("Placed:", order.name, order.order)
     }}/>
    </>
  )
}

export default App
