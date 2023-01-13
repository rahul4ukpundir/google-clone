import React from 'react';
import { Search, Camera, InputTwoTone, Mic } from '@material-ui/icons';
import useGoogleSearch from './useGoogleSearch';
import { useNavigate } from 'react-router-dom';
import response from "./Response.json"
import "./SearchContainer.css";
import { useDataLayerValue } from '../DataLayer/DataLayer';


const SearchContainer = ({isSearchButtonHide = false}) => {
  const [input, searchInput] = React.useState("");
  const navigate = useNavigate();
  const [{googleData}, dispatch] = useDataLayerValue();
  //const {} =  useDataLayerValue(input)
  const data =response;



  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch({
      type: "SET_GOOGLE_DATA",
      googleData: data
    })
    console.log(input)
  }

  return (
    <form className='search'>
       <div className='search_input'>
            <Search className ='left-search-icon' />
            <input onChange={(event) =>searchInput(event.target.value)} />
            <InputTwoTone className ='left-search-icon'/>
            <Mic  className ='left-search-icon'/>
            <Camera className ='left-search-icon' />
        </div>
        <div className='button-google-search'>
        {!isSearchButtonHide ?   <button type="submit" className='btn-google-search' title='Google Search' onClick={searchHandler}>Google Search </button> :
        <button className='btn-google-search-hide' title='Google Search' >Google Search </button> }
        </div>
        
        
    </form>
  )
}

export default SearchContainer
