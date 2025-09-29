import React from 'react'

const Suggestion = ({resultsData}) => {
  return (
    <div className='w-96  rounded-2xl px-3 py-2 hover:bg-gray-300 cursor-pointer mt-1 border-b-2 flex justify-between border-red-400'>
     📍 {resultsData} <span className='text-end'>⚔️</span>
    </div>
  )
}

export default Suggestion
