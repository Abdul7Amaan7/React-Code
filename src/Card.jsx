import React from 'react'
import Savebnt from './Savebnt'
import Keytext from './Keytext'
import Applynowbtn from './Applynowbtn'

function Card({
  titlename = "adrak" , description = "lassan" , adrak = 'bg-amber-600'
}) {
  return (
    <>
    <div className={`w-[300px]  m-11 ${adrak}`}>
     <div className='flex gap-2'>
       <img className='w-[30px] h-[30px]' src='https://img.icons8.com/color/1200/google-logo.jpg'></img>
      <Savebnt/>
     </div>
      <div className='flex items-baseline-last'>
        <p className='text-4xl'>{titlename}</p>
      <p className=''>5 days ago</p>
      </div>
      <p>{description}</p>
      <Keytext/>
      <hr></hr>
      <p>$120/hr</p>
      <p>Mumbai, India</p>
      <Applynowbtn/>
    </div>
    </>
  )
}

export default Card