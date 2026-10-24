import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Link, Routes , Route }from 'react-router-dom'
import User from './pages/component/User'
import Layout from './Layout'

function App() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact/>}/>
            </Route>
            {/* <Route path="/users/:id" element={<User />}/> */}
        </Routes>
    </div>
  )
}

export default App