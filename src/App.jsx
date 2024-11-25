import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice'
import LuckyN from './LuckyN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <LuckyN />
    </>
  )
}

export default App
