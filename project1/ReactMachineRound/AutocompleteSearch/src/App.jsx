import { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import Suggestion from "./components/Suggestion";

function App() {
   const [searchResult,setSearchResult] = useState([])
  return (
     <div className='flex items-center flex-col'>
      <AutoComplete searchRes={setSearchResult}/>
      {searchResult?.map((data)=>(
        <Suggestion resultsData={data?.name}/>
      ))}
     </div>
  )
}

export default App
