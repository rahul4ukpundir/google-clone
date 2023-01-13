import { Search, ShoppingBasket, VideoCall, Image, MoreHoriz, MoreVert } from '@material-ui/icons';

import React from 'react'
import SearchContainer from './SearchContainer';
import { Link } from 'react-router-dom';
import "./SearchPage.css"
import { useDataLayerValue } from '../DataLayer/DataLayer';

const SeachPage = () => {
  const [{ googleData }, dispatch] = useDataLayerValue();
  console.log("google data", googleData)
  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        <Link to="/">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        </Link>

        <div className='searchPage_header_body'>
          <SearchContainer isSearchButtonHide />
          <div className='search_options'>
            <div className='left_search_option'>
              <Search />
              <Link>All</Link>
              <ShoppingBasket />
              <Link>Shopping</Link>
              <VideoCall></VideoCall>
              <Link>Video Call</Link>
              <Image></Image>
              <Link>Image</Link>
              <MoreVert />
              <Link>More</Link>
            </div>
            <div className='right_search_option'>
              <Link>Tools</Link>
            </div>
          </div>


        </div>

      </div>
      {
        googleData &&
        <div className='search_result_section'>
          <p>
            About  {googleData?.searchInformation?.formattedTotalResults
            }  results ({googleData?.searchInformation?.formattedSearchTime} seconds)
            </p>
            {googleData?.items?.map(item =>(
              <div className='search_results'>
                <a className='display-link' href ={item.link}>
                {item.displayLink}
                </a>
                <a className='display-title' href ={item.link}>
               <h2>{item.title}</h2> 
                </a>
                <p>{item.snippet}</p>
              </div>
            ))}
        </div>
      }

    </div>
  )
}

export default SeachPage
