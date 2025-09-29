import { useEffect, useState } from "react";
import "./App.css";
const ToastContainer = () => {
  const [toastList, setToastList] = useState([]);

  const handelBtnMessage = (toastType, toastMsg) => {
    const id = new Date().getTime()
    setToastList((prev) => [...prev, {id,toastType,toastMsg}]);
  };

  const handelDelete = (index) =>{
    console.log(index,"index")
    setToastList((prev)=>prev.filter((data)=>data.id !== index))
  }


  useEffect(()=>{

  })

  console.log(toastList);
  return (
    <div className="parentContainer">
      {/* Toast */}
      {toastList.length > 0 && (
        <div className="toastParent">
          {toastList?.map((data, index) => (
            <div className={`toast ${data.toastMsg}`} key={index}>
              <span>{data.toastType} Alert</span> <span className="deleteBtn" onClick={()=>handelDelete(data.id)}>X</span>
            </div>
          ))}
        </div>
      )}

      {/* Btn Section */}
      <div>
        <button onClick={() => handelBtnMessage("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handelBtnMessage("Warning", "warning")}>
          warning Toast
        </button>
        <button onClick={() => handelBtnMessage("Info", "info")}>
          Info Toast
        </button>
        <button onClick={() => handelBtnMessage("Error", "error")}>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
