import { useState } from "react";
import "./App.css";
import Suggestion from "./Suggestion.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const[suggestion,setShowSuggestion] = useState(false)
  const [filterData,setFilterData] = useState([]);
    const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Pineapple",
  ];

  const handelChange = (e) => {
    console.log(e.target.value);
    let inputData = e.target.value;
    setInputVal(inputData);
   let data = fruits.filter((data)=>data.toLowerCase().includes(inputData.toLowerCase()));
   setFilterData(data)
  //  console.log(data)
    setShowSuggestion(true);

  };


  const handelClick = () =>{
    setShowSuggestion(true)
  }



  return (
    <div>
      <input
        type="text"
        onChange={handelChange}
        value={inputVal}
        onClick={handelClick}
        placeholder="Searc GData"
      />
     {suggestion && <Suggestion fruits={filterData}/>}
     
    </div>
  );
}

export default App;
