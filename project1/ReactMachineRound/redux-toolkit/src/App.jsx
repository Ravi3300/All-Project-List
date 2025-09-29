import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './utils/slices/counterSlice'
import { useEffect } from 'react'
// import store from './utils/store'
function App() {
   const counterVal = useSelector((store)=>store.counter)
   console.log(counterVal,"store")
     const dispatch = useDispatch();

     useEffect(()=>{
      const id = setInterval(()=>{
         dispatch(increment())
      },1000)
      return () =>{
         clearInterval(id)
      }
     })
  return (
     <div>
        <h1>Redux Toolkit</h1>
        <p>counter value : {counterVal}</p>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>subtract</button>
     </div>
  )
}

export default App
