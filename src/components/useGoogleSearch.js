import React, { useEffect, useState } from 'react';
import googleSearchKey from './googleKey';

const contextKey = '8ff09b4c8b8e90a14';

const useGoogleSearch = (input) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if(input && input.length>0){
        fetch(`https://www.googleapis.com/customsearch/v1?key=${googleSearchKey}&cx=${contextKey}&q=${input}`).then(response => response.json())
            .then(result => {
                console.log("result", result)
                setData(result);
            })
        }
    }, [input])

    return data;
}

export default useGoogleSearch
