export const UseCallBackChild = ({onChange}) =>{
    console.log("childCalled")
    return (
        <div>
            <input
            type="number"
            onChange={onChange}
          />
        </div>
    )
}