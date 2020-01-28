import React from 'react';
import fileData from "../postData.json";
import ItemBox from "./itemBox.js";

const Box = () => {
  return (
    <section>
    <div className="content">
      <h1>Homes around the world</h1>
      {fileData.map(postDetails => {
        return <ItemBox postDetails={postDetails} />;
      })}
    </div>
    </section>
  );
};

export default Box;
