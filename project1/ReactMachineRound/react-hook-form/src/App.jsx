import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register } = useForm({
    firstName: "",
    lastName: "",
    address: "",
    mobileNo: "",
  });

  return (
    <div>
      <h1>React Hook Form</h1>

      <div>
        <form>
          <div>
            <label>
              First Name
              <input type="text" {...register()} />
            </label>
          </div>

          <div>
            <label>
              Last Name
              <input type="text" {...register()} />
            </label>
          </div>

          <div>
            <label>
              Mobile No
              <input type="text" {...register()} />
            </label>
          </div>
          <div>
            <label>
              Address
              <textarea {...register()}></textarea>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
