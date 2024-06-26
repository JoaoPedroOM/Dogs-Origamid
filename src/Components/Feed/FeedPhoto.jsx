import React, { useEffect } from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import Error from "../Helper/Error"
import Loading from "../Helper/Loading"
import useFetch from "../../Hooks/useFetch"
import { PHOTOS_GET } from '../../Api/api'

const FeedPhoto = ({page, user, setModalPhoto, setInfinite}) => {

  const {data, loading, error, request} = useFetch()

  useEffect(() => {
    async function fetchPhotos(){
      const total = 6;
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options)
      if(response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos();
  }, [request, user, page, setInfinite])

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data)
  return (
    <ul className='animate-left grid grid-cols-3 gap-4 mb-4 justify-center sm:grid-cols-2'>
      {data.map(photo =>
         <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
         )}
    </ul>
  )
  else return null
}

export default FeedPhoto
