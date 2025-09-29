
import { useState } from 'react'
import './App.css'
import LiftingUpChildOne from './LiftingUpChildOne'
import LiftingUpChildTwo from './LiftingUpChildTwo'
import UpdateObjectArray from './UpdateObjectArray';

import MemoizationConcept from './MemoizationConcept';
import UserConext from './UserConext';
import { ContextComp1 } from './ContextComp1';
import { ContextComp2 } from './ContextComp2';
import { Counter } from './AllReduxConcept/Counter';
import { Provider } from 'react-redux';
import { store } from './AllReduxConcept/store';
import MainFile from './HOC/MainFile';

function App() {
   const[parentState,setParentState] = useState('');
    console.log(parentState,"parentData")

    const [contextData,setContextData] = useState('English')
  return (
      <div>
        {/* <h1>Lifting Up State</h1>
        <LiftingUpChildTwo parentVal={parentState}/>
        <LiftingUpChildOne setParentState={setParentState}/> */}
        {/* <UpdateObjectArray/> */}
        {/* <MemoizationConcept/> */}

        {/* <UserConext.Provider value={{contextData,setContextData}}>
          <ContextComp1/>
          <ContextComp2/>
        </UserConext.Provider> */}
        <Provider store={store}>
         <Counter/>
        </Provider>

        <MainFile/>
      </div>
  )
}

export default App
