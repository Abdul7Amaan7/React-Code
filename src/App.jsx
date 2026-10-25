import React from 'react'
import Dashboard from './Dashboard'
import CartProvider from './Component/ContextProvider'

function App() {
  return (
    <div>
      <CartProvider>
      <Dashboard/>
      </CartProvider>
    </div>
  )
}

export default App