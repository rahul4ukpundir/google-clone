import React from 'react'
import { Avatar } from '@material-ui/core'
import { Apps } from '@material-ui/icons'
import RahulJPG from "../images/Rahul.jpg";
import SearchContainer from './SearchContainer';
import './Home.css';



const Home = () => {
  return (
    <div className='home__page'>
      <div className='homepage_header'>
        <a href='#'>Gmail</a>
        <a href='#'>Images</a>
        <Apps className='header_icon' />
        <Avatar className='header_icon' src ={RahulJPG}/>
      </div>

      <div className='homepage_body'>
        <img src ="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
      <SearchContainer />
      </div>
      
    </div>
  )
}

export default Home
