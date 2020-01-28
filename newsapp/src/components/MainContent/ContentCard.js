import React from 'react';



const ContentCard = props =>{
   // console.log(props.post);
return (
<div className="cardItem">
    <div className="cardImg">
            <div className="cardBox">
            <img src={props.data.urlToImage} alt="blabla"></img>
            </div>
        </div>
        <div className="cardContent">
           <div className='titleAndAuthor'>
            <h1>{props.data.title}</h1>
            <div className="authorBox">
            <p>{props.data.data} </p>
            <p>  {props.data.author}</p>
            </div>
            </div>
            <div className="cardDescription">
            <p >{props.data.description}</p>
            </div>
            <button> read more</button>      
        </div>
        <div className="cardShare">
            <i className="fas fa-share-alt"></i>

        </div>
</div>
    )
};

export default ContentCard;