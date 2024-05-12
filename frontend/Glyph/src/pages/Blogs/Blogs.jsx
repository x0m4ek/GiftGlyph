import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Warning from '../../components/warning/Warning';
import Footer from '../../components/footer/Footer';
import "./Blogs.scss";
import { MenuItem, Pagination, Select, TextField } from '@mui/material';
import Blog from '../../components/blog/Blog';
import Blog1 from "../../images/blog`1.png"
import Blog2 from "../../images/blog2.png"
import Blog3 from "../../images/blog3.png"
function Blogs() {
  return (
    <>
    <Warning />
    <Navbar />
    
    <div className="tom-big">
        <div className="conteiner">

    
        <div className="big-text">
            <h3>
            Browse All Blogs
            </h3>
        </div>
        </div>
    </div>
    
    <div className="blogs_wrapper">
        <div className="conteiner">

  
        <div className="filters-blog">
            <div className="search">
                <p>Find</p>
                <TextField placeholder='Search' variant='outlined' 
              
                />
            </div>
            <div className="sort-by">
                <p>Sort by</p>
                <Select defaultValue={"latest"}>

                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                </Select>
            </div>
        </div>
        <div className="blogs">
            <Blog title={"A Modern Solution to Traditional Gifting"}
                text={"Lorem ipsum dolor sit amet consectetur. Dui scelerisque egestas iaculis integer leo sit aliquet elementum. Lorem sed pharetra velit consectetur."}
                img={Blog1}
            />
             <Blog title={"5 Creative Ways to Use E-Gift Cards"}
                text={"Lorem ipsum dolor sit amet consectetur. Dui scelerisque egestas iaculis integer leo sit aliquet elementum. Lorem sed pharetra velit consectetur."}
                img={Blog2}
            />
             <Blog title={"E-Gift Card Etiquette"}
                text={"Lorem ipsum dolor sit amet consectetur. Dui scelerisque egestas iaculis integer leo sit aliquet elementum. Lorem sed pharetra velit consectetur."}
                img={Blog3}
            />
            <div className="pag">
            <Pagination count={3} variant="outlined" shape="rounded" size="large" />
            </div>
           
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Blogs