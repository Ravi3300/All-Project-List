export const Settings = ({data,setData}) =>{
    const{theme} = data;
    const handleChange = (e,name) =>{
         setData((prev)=>({...prev,theme:e.target.name}))
    }

console.log(data,"uodateData")
    return(
        <div>
            <div>
                <input type="radio" name="dark" checked={theme === 'dark'} onChange={(e)=>handleChange(e,name)}/>
                <label> Dark</label>
            </div>

            <div>
                <input name="light" type="radio" checked={theme === 'light'} onChange={(e)=>handleChange(e,name)}/>
                <label >Light</label>
            </div>
        </div>
    )
}