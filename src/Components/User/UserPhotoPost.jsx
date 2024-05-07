import React, { useEffect, useState } from "react";
import Header from "../Header";
import UserHeader from "./UserHeader";
import UseForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error"
import { PHOTO_POST } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const nome = UseForm();
  const peso = UseForm();
  const idade = UseForm();
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate()

  useEffect(() =>{
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <>
      <Header />
      <UserHeader />
      <section className="animate-left container grid grid-cols-2 gap-8 mb-8 sm:grid-cols-1">
        <Head title="Poste sua foto"/>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" typeValue="text" name="nome" {...nome} />
          <Input label="Peso" typeValue="number" name="peso" {...peso} />
          <Input label="Idade" typeValue="number" name="idade" {...idade} />
          <div className="grid w-full max-w-xs items-center gap-1.5 mb-4">
            <label
              htmlFor="img"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sua foto
            </label>
            <input
              name="img"
              id="img"
              type="file"
              onChange={handleImgChange}
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error}/>
        </form>
        {img.preview && (
          <div
            className={
              "rounded-2xl bg-cover bg-center after:block after:h-0 after:pb-[100%]"
            }
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </section>
    </>
  );
};

export default UserPhotoPost;
