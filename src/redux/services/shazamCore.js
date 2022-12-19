import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f7ebe41667msh2f29f080e585f2bp14b0b2jsn9e72e33ee4ab',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};
  
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
});