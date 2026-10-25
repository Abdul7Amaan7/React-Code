
import Card from './Card'
import { useContext } from 'react'

import { CartContext } from './Context'



function RightSide() {
  const a = useContext(CartContext)
  
  return (
    <div>

        <Card age = {a.cartCount} />
        <button onClick={a.addItem}> click</button> 

    </div>
  )
}

export default RightSide