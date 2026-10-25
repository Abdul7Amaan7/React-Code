import React from 'react'

function Card({name = "dummy ", age = "dummy" , salary = "dummy"}) {
  return (
    <div>
        <div>Name : {name}</div>
        <div>Age : {age}</div>
        <div>Salary : {salary}</div>
      </div>
  )
}

export default Card