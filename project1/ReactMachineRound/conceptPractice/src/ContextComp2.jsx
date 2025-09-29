import { useContext } from "react"
import UserConext from "./UserConext"

export const ContextComp2 = () =>{
    const subject = useContext(UserConext)
    return(
        <div>
            ContextComp1
           <h1>{subject.contextData}</h1>
        </div>
    )
}