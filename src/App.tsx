import React from "react";
import {
 BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
  } from "react-router-dom";
//import logo from "./logo.svg";
/** Screens */
import Pokemons from "./Components/AllPokemons/AllPokemons";
import SearchPokemon from "./Components/SearchPokemons/SearchPokemons";
import MyPokemon from "./Components/MyPokemons/MyPokemons";
import AllPokemons from "./Components/AllPokemons/AllPokemons";
import Home from "./Components/Home/Home";
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./App.css";

import Loader from "../src/UI/Pokeloader/Pokeloader";

function App() {
  return (
    <div className="App">

  

  <Router>

  <Header />
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allPokemon">All Pokemon</Link>
            </li>
            <li>
              <Link to="/myPokemons">My Pokemon</Link>
            </li>

            <li>
              <Link to="/searchPokemon">Search Pokemon</Link>
            </li>
            
          </ul>
        </nav> */}


        <Switch>
          <Route path="/allPokemon">
            <AllPokemons />
          </Route>
              <Route path="/myPokemons">
            <MyPokemon />
          </Route>
          <Route path="/searchPokemon">
            <SearchPokemon />
          </Route>

           <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
      <Footer /> 
    </Router>




    </div>
  );
}

export default App;
