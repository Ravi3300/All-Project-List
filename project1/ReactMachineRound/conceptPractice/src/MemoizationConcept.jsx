import { useCallback, useState } from "react";
import { ChildA } from "./ChildA";

const MemoizationConcept = () =>{
    const [add,setAdd] = useState(0);
    const Learning = useCallback(() =>{},[add])

    return(
        <div>
            <h1>Learning UseCallBakc</h1>
                <h2>{add}</h2>
                    <ChildA Learning={Learning}/>
                <button onClick={() => setAdd((prev)=>prev+1)}>Increment</button>
        </div>
    )
}

export default MemoizationConcept;