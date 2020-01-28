import React from "react";
import Style from "./style.module.css";
const stImg =
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg";

const StarBar = ({ postDetails }) => {
  const { star } = postDetails;

  return [...Array(star)].map((e, i) => (
    <img src={stImg} className={Style.star} alt={postDetails.altDescription} />
  ));
};

export default StarBar;
