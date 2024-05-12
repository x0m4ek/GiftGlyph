import React from 'react';
import "./Blog.scss"
import { useNavigate } from 'react-router-dom';

function Blog({title, text, img}) {
    const navigate = useNavigate();
  return (
    <>
        <div className="wrapper-blog" onClick={() => navigate("../post/123")}>
            <div className="image">
                <img src={img} alt="Reload" />
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    </>
  )
}

export default Blog