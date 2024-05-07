import React from "react";
import Image from "../Helper/Image";

const FeedPhotoItem = ({ photo, setModalPhoto }) => {

  function handleClick(){
    setModalPhoto(photo)
  }

  return (
    <li onClick={handleClick}
      className="group/feed grid rounded overflow-hidden cursor-pointer [&:nth-child(2)]:row-span-2 [&:nth-child(2)]:col-start-2
    [&:nth-child(2)]:col-end-4 sm:[&:nth-child(2)]:row-auto sm:[&:nth-child(2)]:col-auto"
    >
      <Image src={photo.src} alt={photo.title} />
      <span
        className="hidden group-hover/feed:flex justify-center items-center group-hover/feed:bg-black/30 text-white text-base text-center detailsVisualizacao"
        style={{ gridArea: "1/1" }}
      >
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotoItem;
