import { useCallback, useState } from "react";
import "./App.css";
import { UseCallBackChild } from "./UseCallBackChild";
const UseCallBackParent = () => {
    const[toggelTheme,setToggelTheme] = useState(false);
    const [number,setNumber] = useState(0);

    const handleChange = useCallback((e) => {
    setNumber(Number(e.target.value));
  }, []);

  return (
     
      <div>
        <h1>UseCallBack Practice</h1>
        <div
          className={`parentContainer ${
            toggelTheme ? "darkTheme" : "lightTheme"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iste eligendi corporis quibusdam hic, ab laborum, nihil a omnis,
            harum voluptate quod optio praesentium! Rem accusantium nisi magnam
            excepturi omnis?
          </p>

          <UseCallBackChild onChange={handleChange}/>
          <button onClick={() => setToggelTheme(!toggelTheme)}>
            ToggelTheme
          </button>
        </div>
      </div>
  );
};

export default UseCallBackParent;
