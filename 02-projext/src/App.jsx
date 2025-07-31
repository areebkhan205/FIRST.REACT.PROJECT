import { useState } from "react";

function App() {

// let [counter,setCounter]=useState(5)

//   // let counter=5
// const addValue= () =>{
//   console.log("clicked",Math.random());
  
//   //counter =counter+1
//   if(counter!=20){
//   setCounter(counter+1)
// }
// }

// //we can use this same concept...
// const removevalue= () =>{
//   if(counter!=0){
//   setCounter(counter-1)
// }
// }

const [counter,setCounter]=useState(10)
const ADDVALUE=()=>{
  setCounter(counter+1);
}
const RemoveValue=()=>{
  setCounter(counter-1);
}

  return (
    // <>
    // <h1>chai</h1>
    // <h2> counter value: {counter}</h2>
    // <button
    // onClick={addValue}>AD VALUE {counter}</button>
    // <br />
    // <button
    // onClick={removevalue}>Decrease value</button>
    // </>


    <>
    <h1> COUNT PRESSER 🍁</h1>
    <button onClick={ADDVALUE}> add {counter} </button>
    <br />
    <button onClick={RemoveValue}>decrease {counter}</button>
    
    
    </>
  )
}

export default App
