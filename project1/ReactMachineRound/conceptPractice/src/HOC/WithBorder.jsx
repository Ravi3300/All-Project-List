export const WithBorder = (WrapperComp) =>{
    return (props) =>{
          return(
            <div style={{border:'1px solid red'}}>
                <WrapperComp {...props}/>
            </div>
          ) 
    }
}