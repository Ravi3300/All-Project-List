import { useState } from 'react'
import './App.css';
import UseMemoHook from './UseMemoHook';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <UseMemoHook/>
    </div>
  )
}

export default App
