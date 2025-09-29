import React from 'react'
import { WithBorder } from './WithBorder'
import SomeComp from './SomeComp'

const MainFile = () => {
    const EnhancedComp = WithBorder(SomeComp)
  return (
    <div>
      <h1>Learning Hoc</h1>
         <EnhancedComp />
    </div>
  )
}

export default MainFile
