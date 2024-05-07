import React, { useEffect } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import { PHOTO_GET } from "../../Api/api";
import Head from "../Helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <Header />
        <section className="container mt-8">
          <Head title={data.photo.title} />
          <PhotoContent single={true} data={data} />
        </section>
      </>
    );
  else return null;
};

export default Photo;
