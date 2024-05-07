import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className='text-base cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] py-[0.8rem] px-[1.2rem] button-details min-w-32'>
      {children}
    </button>
  )
}

export default Button
