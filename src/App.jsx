import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state=> state.counter.counterValue)
  return (
    <div>
      <button onClick={()=>dispatch((state=>state.counter))}>+</button>
      <div>{selector}</div>
      {/* <button onClick={()=>dispatch()}>-</button>
      <button onClick={()=>selector()}></button> */}
    </div>
  )
}

export default App
