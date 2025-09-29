import React, { useEffect, useState } from 'react'

const AutoComplete = ({searchRes}) => {
    const[text,setText] = useState('')
    
    const fetchData = async(value) =>{
        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = await fetch(url);
        const jsonData = await data.json();
        const result = jsonData.filter((users)=>{
            return value && users && users.name && users.name.toLowerCase().includes(value)
        })
        console.log(result,"jsonResult")
        searchRes(result)
    }

   const handleSubmit = (value) =>{
    setText(value);
       setTimeout(()=>{
            fetchData(value); 
        },200)
   }
//    const BetterFunction = (fn,d) =>{
//         let timer;
//           return function(){
//             clearTimeout(timer)
//             timer= setTimeout(()=>{
//                  fn()
//              },d)
//           }
//    }

  return (
    <div>
       <div className='w-96'>
           <h1 className='font-bold mt-2 '>AutoComplete / TypeHead</h1>
           <div>
           <input type='text' placeholder='Enter Search Box' className='px-2 py-2 border border-gray-200 rounded-2xl w-full' value={text} onChange={(e)=>handleSubmit(e.target.value)}/>
           </div>
       </div>
    </div>
  )
}

export default AutoComplete
