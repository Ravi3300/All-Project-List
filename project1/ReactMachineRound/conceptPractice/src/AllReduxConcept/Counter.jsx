import {  useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice";

export const Counter = () =>{
 
    const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count)
    return(
        <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Increment</button><br/>
        <button onClick={() => dispatch(decrement())}>Decrement</button><br/>
        <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}