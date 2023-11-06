import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard';
import '../styles/Movie.css';

function Movies() {

  let inputStyle = {
    width: "280px",
    padding : "10px",
    borderRadius : "5px",
    outline: "none",
    marginTop:"20px",
    marginBottom: "20px",
    marginLeft:"calc((80vw)/2)"
  
  }

  const [newData,setNewData] = useState([]);
  const [search,SetSearch]= useState("Hollywood");

  useEffect (()=>{
    (async function f1(){
      let url =`https://www.omdbapi.com/?apikey=45f0782a&s=${search}`;
      const response = await fetch(url);
      const data = await response.json();
      

      setNewData(data["Search"]);

    })();
  },[search])
  return (
    
    <>

     

      <input
      style={inputStyle}
      placeholder='Search Movies!'

      onChange={(e)=>{
        SetSearch(e.target.value);

        

      }}

      
      />





      <div className='Movies-Component'>


        {newData?.map((item) => {
          return <MoviesCard data={item} />;

        })}



      </div>

    </>
  )
}

export default Movies