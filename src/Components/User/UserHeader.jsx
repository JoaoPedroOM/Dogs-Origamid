import React, { useEffect, useState } from 'react'
import UserHeaderNav from "./UserHeaderNav"
import Feed from '../Feed/Feed'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  let location = useLocation();

  useEffect(() => {
    const {pathname} = location;
    switch(pathname){
      case '/conta/postar':
        setTitle("Poste sua foto")
        break;
      case '/conta/estatisticas':
        setTitle("Estatísticas")
        break;
      default:
        setTitle("Minha conta")
      
    }
  }, [location])

  return (
    <header className='grid grid-cols-accountGrid items-center mb-8 relative mt-4 container'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav/>
    </header>
    
  )
}

export default UserHeader
