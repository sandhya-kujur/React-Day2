import { useState } from 'react'
import SecretMessage from './components/SecretMsg'
import './App.css'

function App() {
  const [showSecret, setShowSecret] = useState(false)

  return ( 
  <div>
      <h1>Secret Message</h1>
      <label>
        <input
          type="checkbox"
          checked={showSecret}
          onChange={(event) => setShowSecret(event.target.checked)}
        />
        Show secret
      </label>
      <SecretMessage message="The hidden harmony is better than the obvious." visible={showSecret} />
    </div>
  )
}

export default App
