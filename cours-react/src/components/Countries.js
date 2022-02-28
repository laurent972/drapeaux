import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

// Fetch
const Countries = () => {

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState([]);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState('');
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  useEffect(()=>{
    if(playOnce){ // statut est à true
      axios
      .get('https://restcountries.com/v3.1/all')
      .then((res)=> {
        setData(res.data);
        setPlayOnce(false); // set Statut à false
      })
    }
    
    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i)=>data[i]);
      const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    }
    sortedCountry();
  },[data, playOnce, rangeValue]); // callback, relance du use effect, avec les nouvelles données


  return (
   
   <div className="countries">
     <div className="radio-container">
       <input type="range" min="1" max="250" vamue={rangeValue} onChange={(e)=> setRangeValue(e.target.value)}/>

       <ul className="radio-display">
         {radios.map((radio)=>{
           return(
             <li key={radio}>
               <input type="radio" value={radio} id={radio} checked={radio === selectedRadio } onChange={(e)=> setSelectedRadio(e.target.value)}/>
               <label htmlFor={radio}>{radio}</label>
             </li>
           )
         })}
       </ul>
     </div>
     
       {selectedRadio &&  <div className="cancel" onClick={()=> setSelectedRadio("")}><h5>Annuler la recherche</h5></div>}
     
     <ul className="countries-list">
        {sortedData
        .filter((country) => country.region.includes(selectedRadio))
        .map((country)=> (
          <Card country={country} key={country.name.common}/>

        ))}
     </ul>
   </div>


  );
};

export default Countries;