
import { Profile } from "./Profile"
import { Interest } from "./Interest"
import { Settings } from "./Settings"
import '../App.css'
import { useState } from "react"

export const TabForm = () =>{
    const [data,setData] = useState({
        name:"Ravi yadav",
        age:"25",
        email:"abcgmail.com",
        intereset:['coding','sport','music'],
        theme:'dark'
    })
    const[activeState,setActiveState] = useState(0);

    const tabList = [
        {
            name:"Profile",
            component:Profile
        },
        {
            name:"Interest",
            component:Interest
        },
        {
            name:"Settings",
            component:Settings
        }
    ]
    const ActiveTabComponent = tabList[activeState].component

    const handlePrevious = () =>{
        setActiveState((prev)=>prev-1)
    }
   const handleNext = () =>{
    setActiveState((prev)=>prev+1)
   }
   const handleSubmit = () =>{
      localStorage.setItem('apiData',data)
   }
     return (
        <div className="parent-class">
           <div className="heading-container">
            {tabList?.map((tab,index)=>(
                <div className="heading" key={index} onClick={()=> setActiveState(index)}>{tab?.name}</div>
            ))}
           </div>
         {/* <div className="comp-parent"> */}
           <div className="compnent-container">
              <ActiveTabComponent data={data} setData = {setData}/>
           </div>
             {/* </div> */}
            {
                activeState > 0 && (
                    <div>
                    <button onClick={handlePrevious}>Prev</button>
                 </div>
                )
            }
           
              {
                activeState < tabList.length-1 && (
                <div>
                    <button onClick={handleNext}>Next</button>
                 </div>)
             
              }

             {
               activeState == tabList.length-1 && ( <div>
                    <button onClick={handleSubmit}>Submit</button>
                 </div>)
             }
            
        </div>
     )
}