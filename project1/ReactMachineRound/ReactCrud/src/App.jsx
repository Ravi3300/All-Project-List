// import { useEffect, useState } from 'react'
// import './App.css';
// import { EmployeeData } from './utils/employeeData';

// function App() {

//   const[data,setData] = useState([]);
//   const[firstName,setFirstName] = useState('');
//   const[lastName,setLastName] = useState('');
//   const[id,setID] = useState(0);
//   const[age,setAge] = useState(0)

//   useEffect(()=>{
//      setData(EmployeeData)
//   },[])

//   const handelEdit = (id) =>{
//        if(id > 0){
//         let dt = data.filter((data)=> data.id == id);
//           if(dt !== undefined){
//             setFirstName(dt[0].firstName);
//             setLastName(dt[0].lastName);
//             setAge(dt[0].age)
//           }
//        }
//   }

//   const handelDelete = (id) =>{
//          console.log(id,"deleteId")
//          setData((prev)=>(prev.filter((data)=>data.id != id)))
//   }

//   const handelClear = () =>{
//     setFirstName('');
//     setLastName('');
//     setAge('')
//   }

//   const handelSave = () =>{
//        let obj={
//         'firstName':firstName,
//         'lastName':lastName,
//         'age':age,
//        'id': setID(data.length + 1)
//        }

//        console.log(obj,"object")

//        setData((prev)=>([...prev,obj]))
//   }

//   return (
//        <div className='tabel-container'>
//         <div style={{display:'flex',justifyContent:'center'}}>
//             <div>
//               <label>First Name:-</label>
//               <input type='text' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
//             </div>

//             <div>
//               <label>Last Name:-</label>
//               <input type='text' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
//             </div>

//             <div>
//               <label>Age:-</label>
//               <input type='number' placeholder='First Name' onChange={(e)=>setAge(e.target.value)} value={age}/>
//             </div>

//             <button onClick={handelSave}>save</button>
//             <button onClick={handelClear}>clear</button>
//         </div>
//           <table style={{marginTop:'30px'}}>
//             <thead>
//                  <tr>
//                    <td>Id</td>
//                    <td>First Name</td>
//                    <td>Last Name</td>
//                    <td>Age</td>
//                    <td>Action</td>
//                  </tr>
//             </thead>
//             <tbody>
//               {data?.map((data)=>(
//               <tr key={data?.id}>
//                  <td>{data?.id}</td>
//                  <td>{data?.firstName} {data?.lastName}</td>
//                  <td>{data?.lastName}</td>
//                  <td>{data?.age}</td>
//                  <button style={{backgroundColor:'blue', color:'white', cursor:'poiner' }} onClick={()=>{handelEdit(data?.id)}}>Edit</button>
//                  <button style={{backgroundColor:'red', color:'white', marginLeft:'30px',cursor:'pointer'}} onClick={()=>{handelDelete(data?.id)}}>Delete</button>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//        </div> 
//   )
// }

// export default App



import { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./utils/employeeData";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "", id: null });

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const selectedEmployee = data.find((emp) => emp.id === id);
    console.log(selectedEmployee,"selected employee")
    if (selectedEmployee) {
      setForm(selectedEmployee);
    }
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleClear = () => {
    setForm({ firstName: "", lastName: "", age: "", id: null });
  };

  const handleChange = (e) => {
    console.log("Handel change",e.target)
    const { name, value } = e.target;
    console.log("after handel change called",{name,value})
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!form.firstName || !form.lastName || !form.age) {
      alert("Please fill in all fields!");
      return;
    }

    if (form.id) {
      // Update existing employee
      setData((prev) =>
        prev.map((emp) => (emp.id === form.id ? { ...form } : emp))
      );
    } else {
      // Add new employee
      setData((prev) => [...prev, { ...form, id: prev.length + 1 }]);
    }

    handleClear();
  };

  return (
    <div className="table-container">
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" placeholder="Age" onChange={handleChange} value={form.age} />
        </div>
        <button onClick={handleSave}>{form.id ? "Update" : "Save"}</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <table style={{ marginTop: "30px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.age}</td>
              <td>
                <button
                  style={{ backgroundColor: "blue", color: "white", cursor: "pointer", marginRight: "10px" }}
                  onClick={() => handleEdit(emp.id)}
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "red", color: "white", cursor: "pointer" }}
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
