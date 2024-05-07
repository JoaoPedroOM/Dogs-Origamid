import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = "Dogs | " + props.title;
    const descriptionMetaTag = document.querySelector("meta[name='description']");
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute("content", props.description || "");
    }
  }, [props]);

  return <></>;
};

export default Head;
