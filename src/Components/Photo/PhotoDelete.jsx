import React from "react";
import { PHOTO_DELETE } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar ?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className="bg-[#ddd] py-[.3rem] px-[.6rem] text-[.875rem] border-[1px] border-solid border-transparent cursor-pointer rounded-md">
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className="bg-[#ddd] py-[.3rem] px-[.6rem] text-[.875rem] border-[1px] border-solid border-transparent cursor-pointer rounded-md focus:outline-none focus:bg-white focus:shadow-account focus:border-[#333] hover:outline-none hover:bg-white hover:shadow-account hover:border-[#333]">
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
