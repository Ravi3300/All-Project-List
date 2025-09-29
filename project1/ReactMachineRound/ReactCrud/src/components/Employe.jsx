

import { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./utils/employeeData";

function Employee() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "", id: null });

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const selectedEmployee = data.find((emp) => emp.id === id);
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
    const { name, value } = e.target;
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

export default Employee;
