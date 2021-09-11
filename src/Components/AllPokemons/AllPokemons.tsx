import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// import "../App.css";




function AllPokemons (){

const [pokemonList, setPokemonList] = useState<any[]>([]);

// useEffect(() => {

// axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
//   .then(function (response) {
//     // handle success
//    // console.log(response.data.results);
//   setPokemonList(response.data.results);
//     //set all pokemons UI
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//     //default
//   });


// }, [])




return (
   <div style={{display:'flex',flexWrap:'wrap'}}>


<h3>Fuck</h3>


</div>
)
}


export default AllPokemons


