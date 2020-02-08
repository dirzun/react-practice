import React,{useEffect, useState} from 'react';
import 'react-dom'
import "./main.scss";
import Sidebar from "./sideBar/Sidebar";
import ContentCard from "./ContentCard.js";

const Main = () =>{
    const [myData, setMyData] = useState([]);
    const data = [{
        title : "X bunny fan",
        description : " It's all about hamster",
        data: "Jan 17,06 ,2018 at 14:00",
        author: "Mia K.",
        imgUrl : "https://scontent.ftce2-1.fna.fbcdn.net/v/t1.0-0/p370x247/21751306_10155724905022838_7192191338970086519_n.png?_nc_cat=1&_nc_oc=AQlpH4mZ9Otv9wJKzy6aa_G7SoR8ZI7HmhfrBQkAIcChT8Zmj2Yfr_h8BEhXY_bvr3Q&_nc_ht=scontent.ftce2-1.fna&oh=6241d15aa384ac8565c8102fc1d3fdb7&oe=5EA14951"
    },
    {
        title : "X bunny fan",
        description : " It's all about hamster,It's all about hamster,It's all about hamster,It's all about hamster,It's all about hamster,It's all about hamster,It's all about hamster,It's all about hamster",
        data: "Jan 17,06 ,2018 at 14:00",
        author: "Mia K.",
        imgUrl : "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.0-9/12141494_1698238640411036_5852816011065338533_n.jpg?_nc_cat=103&_nc_oc=AQlDcduw8KsPR_swC99mUE404UObq6VJTDTJ8-IPnWno-RY0cu_teCUZM8c064-nkWc&_nc_ht=scontent.ftsr1-2.fna&oh=d32ff79d5a6e13d1a90e1e9a68688ebf&oe=5E9F9A3F"
    },
    {
        title : "X bunny fan",
        description : " It's all about hamster",
        data: "Jan 17,06 ,2018 at 14:00",
        author: "Mia K.",
        imgUrl : "https://scontent.ftsr1-1.fna.fbcdn.net/v/t31.0-8/s960x960/22550208_787236021483057_4183628745154643506_o.jpg?_nc_cat=106&_nc_oc=AQkbZDWcB8DBBbyV4MkVOKE16NSkyhz7hgmoo1CS0DymTJNzSuRbpJRseF8jZz-eHx8&_nc_ht=scontent.ftsr1-1.fna&_nc_tp=1002&oh=a9e851c9c2610e4cab8af98ded603ef1&oe=5ED98EB3"
    }]

useEffect(() => {
    fetch(url).then(response=>response.json()).then(res => {
        setMyData(res.articles);
    });
    console.log(myData);
}, [])
console.log(myData)
    const url = "https://newsapi.org/v2/top-headlines?country=ro&category=technology&apiKey=d308713e8e22447eab9a94dfae13da6a";




   return (
<>
<div className="mainPart">
    <div className="upBar">
        <p> News Feed</p>
        <p>Twitter Feed</p>
        <div className="upBarFilter"><i className="fas fa-filter"></i></div>
    </div>
    {myData.map( (data,index )=> <ContentCard  data={data} key={index}/>)}
</div>

<Sidebar />
</>
    );
}

export default Main;
