import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../Api/api'
import Error from "../Helper/Error"
import Loading from "../Helper/Loading"
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch()

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request])

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalPhoto(false)
  }

  return (
    <section className='modal' onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </section>
  )
}

export default FeedModal
