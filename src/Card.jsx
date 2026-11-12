import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment } from './store/counterSlice';
import { useState } from 'react';

function Card() {

  const [data ,usedata] = useState(0)

   const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      Number : {count}
      <div>
      <input 
      type='number'
      value={data}
      onChange={(e)=>usedata(Number(e.target.value))}
      />
      </div>
    <button onClick={()=>dispatch(increment(data))}>click</button>
    </div>
  )
}

export default Card