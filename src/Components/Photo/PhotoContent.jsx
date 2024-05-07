import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image"

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`photo ${single ? "grid-cols-1 h-auto static" : ""}`}>
      <div className={`img ${
          single ? "[grid-row:1!important] rounded overflow-hidden" : ""
        }`}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={`${single ? "p-0 pt-4" : "pt-8 pr-8 pb-0 pl-8"}`}>
        <div className="">
          <p className="opacity-[0.5] flex justify-between items-center">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link className="hover:underline" to={`/perfil/${photo.author}`}>
                @{photo.author}
              </Link>
            )}
            <span className="visualizacao">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="flex text-[1.125rem] font-bold mt-4 mb-8">
            <li className="mr-8 before:content-[''] before:inline-block before:h-5 before:mr-[0.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-[#333] before:mt-[5px]">
              {photo.peso} kg
            </li>
            <li className="mr-8 before:content-[''] before:inline-block before:h-5 before:mr-[0.5rem] before:relative before:top-[3px] before:w-[2px] before:bg-[#333] before:mt-[5px]">
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} className="py-0 px-8" id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
