const LiftingUpChildOne = ({setParentState}) =>{
    // const handleInputData = (e) =>{
    //    setParentState(e.target.value);
    // }
    return(
        <div>
            <h2>Child-one</h2>
            <input type="text" onChange={(event) => setParentState(event.target.value)}/>
        </div>
    )
}
export default LiftingUpChildOne;