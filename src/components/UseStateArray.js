import React, { useState } from 'react'

const UseStateArray = () => {
  var bioData = [
    {
      id: 0, myName: 'vinod', age: '26'
    },
    {
      id: 1, myName: 'thapa', age: '28'
    },
  ];
  const clearArray = () => {
    setMyArray([]);
  }
  // now using useState
  const [myArray, setMyArray] = useState(bioData);
  return (
    <>
      {
        myArray.map((curElm) => {
          return <h1 key={curElm.id}>Name : {curElm.myName} & age:{curElm.age}</h1>
        })
      }
      <button className='btn' onClick={clearArray}>Clear </button>
    </>
  )
}

export default UseStateArray