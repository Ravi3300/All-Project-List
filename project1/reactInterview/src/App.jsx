
import { useEffect } from 'react';
import './App.css'
import Counter from './Counter';
import UseMemo from './UseMemo';
import UseCallBackParent from './UseCallBackParent';
import HigherOrderLoading from './HigherOrderLoading';
import UserInfo from './UserInfo';


function App() {
  const EnhancedComponent = HigherOrderLoading(UserInfo)
  return (
        <div>
           {/* <Counter/> */}
           {/* <UseMemo/> */}
           <UserInfo/>
           <EnhancedComponent/>
           {/* <UseCallBackParent/> */}
        </div>
  )
}

export default App
