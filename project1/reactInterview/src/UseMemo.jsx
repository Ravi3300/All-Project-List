import { useMemo, useState } from 'react';
import './App.css'
const UseMemo = () =>{
    const[toggelTheme,setToggelTheme] = useState(false);
    const[number,setNumber] = useState(0);
     const squareNumber = (num)=>{
        console.log("When this function called")
        return num*num
     }

     const memoSquare = useMemo(()=>{
          return squareNumber(number)
     },[number])

   return(
     <div>
        <h1>UseMemo Practice</h1>
        <div className={`parentContainer ${toggelTheme ? 'darkTheme' :'lightTheme'}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste eligendi corporis quibusdam hic, ab laborum, nihil a omnis, harum voluptate quod optio praesentium! Rem accusantium nisi magnam excepturi omnis?</p>  

            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/> 

            <h1>{memoSquare}</h1>
         <button onClick={()=>setToggelTheme(!toggelTheme)}>ToggelTheme</button>
        </div>
     </div>
   )
}

export default UseMemo;