import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import { Apps, Camera, InputTwoTone, Mic, Search } from '@material-ui/icons'
import './Home.css';
import RahulJPG from "../images/Rahul.jpg";

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
        <div className='search_input'>
            <Search className ='left-search-icon' />
            <input />
            <InputTwoTone className ='left-search-icon'/>
            <Mic  className ='left-search-icon'/>
            <Camera className ='left-search-icon' />
        </div>
        <button className='btn-google-search' title='Google Search' >Google Search </button>
        
      </div>
    </div>
  )
}

export default Home
