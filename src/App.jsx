import { useRef } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmount, reset } from './Redux/counterSlice'

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state=> state.counter.counterValue)
  const inputRef = useRef(null)

  const handleAdd = () => {
    const { value } = inputRef.current
    if(!value.trim().length) return
    if (Number.isNaN(num) || num <= 0) return;
    const num = Number(value)
    dispatch(increamentByAmount(num))
    inputRef.current.value = ""
  }

  return (
    <div>
      <button onClick={()=>dispatch(increament())}>+</button>
      <div>{selector}</div>
      <button onClick={()=>dispatch(decreament())}>-</button>
      <div>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
      <div>
        <input type="number" ref={inputRef}/>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default App