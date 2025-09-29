import { useState } from "react"

const UpdateObjectArray = () =>{
    const[state,setState] = useState({
        name:"Ravi yadav",
        address:{
            city:"Delhi",
            state:"Bihar"
        }
    })
    const handleChangeData = (value)=>{
        console.log(value);
        let updateName = value
        setState({...state,name:value})
    }


    const handleCityData = (value) =>{
        state.address.city = value
        console.log(state,"city");
        setState({...state , address:{...state.address,value}})
    }
    return(
        <div>
            <h1>Object Update Here:-</h1>
            <input type="text" placeholder="Enter Name" onChange={(event)=>handleChangeData(event.target.value)}/>

            <input type="text" placeholder="Enter city" onChange={(event)=>handleCityData(event.target.value)}/>

            <h1>{state.name}</h1>
            <h1>{state.address.city}</h1>
            <h1>{state.address.state}</h1>
        </div>
    )
}

export default UpdateObjectArray;