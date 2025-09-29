
import './App.css'
import SearchInput from './SearchInput'

function App() {
  

  return (
     <div className='flex items-center mt-2 flex-col'>
        <div className='mt-2 font-bold'>
            AutoComplete SearchBar
        </div>
        <div className='mt-3'>
        <SearchInput/>
        </div>
     </div>
  )
}

export default App
