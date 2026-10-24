import React from 'react'

function Dashboard({children}) {
  return (
    <>
    <h3>Title</h3>
    <div className='bg-red-300'>
    {children}
    </div>
    </>
  )
}

export default Dashboard