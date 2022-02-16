import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';


const Countries = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios
    .get('https://restcountries.com/v3.1/all')
    .then((res)=> setData(res.data));
    console.log(data);
  },[]);


  return (
   
   <div className="countries">
     <ul className="countries-list">
        {data.map((country)=> (
           <Card />
        ))}
     </ul>
   </div>


  );
};

export default Countries;