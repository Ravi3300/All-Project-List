import { useEffect, useState } from "react";
import SuggestionItems from "./SuggestionItems";

const SearchInput = () =>{
    const[searchText,setSearchText] = useState([]);
    const [inputVal,setInputVal] = useState('');
    const [showResult,setShowResult] = useState(false);
    const [caching,setCaching] = useState({})


    const fetchData = async() =>{
        if(caching[inputVal]){
            console.log(caching,"cache")
           setShowResult(caching[inputVal]);
           return;
        }
        let url = `https://dummyjson.com/recipes/search?q=${inputVal}`
        const data = await fetch(url);
        const getRecepie= await data.json();
        setSearchText(getRecepie?.recipes);
        setCaching((prev)=>({...prev,[inputVal]:getRecepie?.recipes}))
    }
   

    useEffect(()=>{
        const timer = setTimeout(fetchData,300)  // here we implement debounceing
         console.log('Api called')
        return ()=>{   // ye return jab call hota hai jab comp.unmount ho jata hai
            clearTimeout(timer)
        }
    },[inputVal])

    return(
        <div>
            <div>
                <input type="text"
                 className="w-96 rounded-2xl py-2 border-1
                  border-gray-300 hover:border-blue-300 outline-0" 
                  placeholder="Search Receipe"
                  value={inputVal}
                  onChange={(e)=>setInputVal(e?.target?.value)}
                  onBlur={() => setShowResult(false)}
                  onFocus={() => setShowResult(true)}
                  />
            </div>

            <div>
                {
                    showResult && inputVal.length > 1? (   <SuggestionItems filterItems={searchText}/>) : ''
                }
            </div>
        </div>
    )
}

export default SearchInput;