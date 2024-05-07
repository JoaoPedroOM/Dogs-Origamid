import React from 'react'

const Error = ({error}) => {

  if(!error) return null;  
  return <p className='my-4 text-[#f31]'>{error}</p>
}

export default Error
