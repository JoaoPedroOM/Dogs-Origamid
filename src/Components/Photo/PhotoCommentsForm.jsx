import React, { useState } from "react";
import Enviar from "../../assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error"
import { COMMENT_POST } from "../../Api/api";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");
  const {request, error} = useFetch();

  async function handleSubmit(event){
    event.preventDefault()

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}  className={`grid grid-cols-[1fr_auto] items-stretch ${
      single ? "p-0 py-4" : "p-4"
    }`}>
      <textarea
        className="block w-full text-[1rem] bg-[#eee] resize-none font-main p-2 border-[1px] border-solid border-[#eee] rounded transition-[0.2s] focus:outline-none focus:border-[#fb1] focus:shadow-inputSd hover:outline-none hover:border-[#fb1] hover:shadow-inputSd focus:bg-white hover:bg-white"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className="border-none cursor-pointer bg-transparent text-[#333] font-[1rem] px-[1rem] overflow-hidden focus:outline-none hover:outline-none [&:focus_svg_path]:fill-[#fea] [&:focus_svg_path]:stroke-[#fb1] [&:focus_svg_g]:animate-blink  [&:hover_svg_path]:fill-[#fea] [&:hover_svg_path]:stroke-[#fb1] [&:hover_svg_g]:animate-blink">
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
  );
};

export default PhotoCommentsForm;
