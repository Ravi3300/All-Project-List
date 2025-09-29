import { useContext } from "react"
import UserConext from "./UserConext"

export const ContextComp1 = () =>{
    const {setContextData} = useContext(UserConext);
    // console.log(data,"conextData");
    return(
        <div>
            ContextComp1

        <div>
           <input type="text" placeholder="EnterSubject Name" onChange={(e)=>setContextData(e.target.value)}/>
        </div>
        </div>
    )
}