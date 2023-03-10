import React, {useState} from 'react'
import UseStateArray from './components/UseStateArray'
const App = () =>{
  // console.log(useState('Surya'));

  // let myFirstval = useState('Surya')[0];
  // console.log(myFirstval);
  // var val = 'thapa technical'

 const [myName, func]= useState('Surya Kurumbang')
  const changeName = () =>{
    // val = 'Surya Kurumbang';
    // console.log(val)

    // to return original
    let val = myName;
    if(val === 'Surya Kurumbang'){
      func('Thapa Technical');
    }
    else{
      func('Surya Kurumbang')
    }

   
  }
  return (
    <>
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>Click Me</button>
    </>
  )
}
export default App

// on clicking name should be changed to Surya Kurumbang but occurs only in console
// now using useState Hooks we can change- useState('initial val') for array returned
// in console - array is returned with [initial val, function]
