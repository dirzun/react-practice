import React from "react";
import StarBar from "./starBar.js";

const ItemBox = ({ postDetails }) => {
  console.log({postDetails});
  return (
    <div className="box">
      <div className="contentBox">
        <div className="containerImg">
        <div className="imgBigBox">
          <div className="imgBox">
            <img src={postDetails.photo} alt={postDetails.altDescription} />
          </div>
        </div>
        </div>
        <div className="description">
          <p>
            {postDetails.type} in {postDetails.city}
          </p>
          <h2>{postDetails.title}</h2>
          <span>
            <StarBar postDetails={postDetails} /> {postDetails.nrReview} *
            {postDetails.host}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ItemBox;
