import React from 'react'
import Dogs from "../assets/dogs-footer.svg"

const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-[#fb1] pt-12 px-4 h-40 text-center text-[#764701]'>
      <Dogs/>
      <p className='pt-4'>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer
