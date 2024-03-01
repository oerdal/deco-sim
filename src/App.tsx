import { useState } from 'react'
import './App.css'
import Decorations from './components/Decorations'

function App() {
  const [focusedFeystone, setFocusedFeystone] = useState(6)

  return (
    <>
      <Decorations />
    </>
  )
}

export default App
