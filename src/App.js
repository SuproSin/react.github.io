import { useState } from 'react';
import './App.css';
import Student from './Student'

function App() {
  
const [data,setData]=useState(2)

{ /* function updateData()
{
  setData(data * data)
} */ }


  return (
    <div className="App">
      { /*  <h1>{data}</h1>
        <button onClick={updateData}> Click Me.</button> */ }

        <Student  name = {"Anil"}/>
    </div>
    
  )
}


export default App;
