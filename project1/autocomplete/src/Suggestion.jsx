const Suggestion = ({fruits}) =>{
    console.log(fruits,"sadsada")
    return (
       <div>
        <ul>
            {fruits.map((data,index)=>(
            <li key={index}>
               {data}
            </li>
            ))}
        </ul>
       </div>
    )
}

export default Suggestion;