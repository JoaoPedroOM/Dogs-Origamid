import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from "../Feed/Feed"
import Header from '../Header'
import Head from '../Helper/Head'

const UserProfile = () => {

  const {user} = useParams()  

  return (
    <>
    <Head title={user}/>
    <Header/>
    <section className='container'>
        <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </section>
    </>
  )
}

export default UserProfile
