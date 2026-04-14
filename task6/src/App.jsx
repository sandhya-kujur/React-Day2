import {useRef, useEffect } from 'react'
import './App.css'

function App() {
   const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, []);

 return(
    <div>
      <h1>Form Input</h1>
      <label>First Name:</label>
      <input 
        type="text" 
        ref={inputRef} />
      <div>
      <label>Last Name:</label>
      <input type="text"/> 
      </div>
       
      <button type="submit">Submit</button>
    </div>
  )
}

export default App
