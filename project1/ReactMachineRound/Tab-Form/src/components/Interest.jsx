export const Interest = ({data,setData}) =>{
    const{intereset} =data;
    console.log(intereset);

    const handleChange = (e,name)=>{
         setData((prev)=>({...prev,intereset:e.target.checked?[...prev.intereset,e.target.name]:prev.intereset.filter((i)=> i !== e.target.name)}))
    }
    return(
        <div>
            <div>
                <input type="checkbox" name="coding" checked={intereset.includes("coding")} onChange={(e)=>handleChange(e,name)}/>
                <label> Coding</label>
            </div>

            <div>
                <input type="checkbox" name="sport" checked={intereset.includes("sport")} onChange={(e)=>handleChange(e,name)}/>
                <label> Sport</label>
            </div>

            <div>
                <input type="checkbox" name="music" checked={intereset.includes("music")} onChange={(e)=>handleChange(e,name)}/>
                <label> Music</label>
            </div>
        </div>
    )
}