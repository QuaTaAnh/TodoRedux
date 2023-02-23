import React from 'react'

const Box = ({children}) => {
  return (
    <div className='w-2/4 border-2 flex justify-between items-center border-black pl-4 pr-4 mb-2'>{children}</div>
  )
}

export default Box