import { useState } from 'react'
import './App.css'

function App() {
 
   const [searchText, setSearchText] = useState('')

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
 <div >
      <h1>Search Bar</h1>
      <input
        type="text"
        placeholder="Type here..."
        value={searchText}
        onChange={handleChange}
      />
      <div><label>Uppercase: {searchText.toUpperCase()}</label></div>
  </div>

  )
}

export default App
