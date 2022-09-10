import React from 'react'
import axios from "axios";

const Apicall = () =>  {

  const options = {
    method: 'GET',
    url: 'https://taobao-api.p.rapidapi.com/api',
    params: {api: 'item_search', page_size: '40', q: 'shoes'},
    headers: {
      'X-RapidAPI-Key': '5bb0f66ab0msh0a40b8f5a6a27f9p1b579cjsn64935567e2bf',
      'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div>Apicall</div>
  )
}

export default Apicall