export const Profile = ({data,setData}) =>{
    const {name,age,email} = data;

    const handleChnage = (e,item) =>{
           setData((prev)=>(
            {
                ...prev,
               [item]:e.target?.value
            }
           ))
    }
    return(
        <div className="inner-form">
            <div className="form-label">
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => handleChnage(e,"name")}/>
            </div>
            <div className="form-label">
                <label>Age :</label>
                <input type="number" value={age} onChange={(e) => handleChnage(e,"age")}/>
            </div>
            <div className="form-label">
                <label>E-mail :</label>
                <input type="text"  value={email} onChange={(e) => handleChnage(e,"email")}/>
            </div>
        </div>
    )
}