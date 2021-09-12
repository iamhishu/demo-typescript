import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import MainLogo from "../../assets/Images/pokeapi.png";
import Search from "../../UI/Search/Search";
import Tag from "../../UI/Tags/Tags";
import Loader from "../../UI/Loader/Loader";
import PokeCard from "../PokeCards/PokeCard";
import Card from "react-bootstrap/Card";
import Pokedex from "../../Components/Pokedex/Pokedex";
import Img from "../../UI/ImageWithFallBack/Img";
import "./Home.css";
// import "../App.css";

function AllPokemons() {
  const [isLoading, setIsLoading] = useState(false);

  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [searchedPokemonList, setsearchedPokemonList] = useState<any[]>([]);
  const [modal, setModal] = useState(false);
  const [modelLoader, setModelLoader] = useState(false);
  const [pokedex, setPokeDex] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const openModel = (name: string) => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase())
      .then(function (response) {
        // handle success
        const pokemon = response.data;
        setPokeDex(pokemon);

        setIsLoading(false);
        setModal(true);
        //set all pokemons UI
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
        //default
      });

    // setModal(true);

    //   setModelLoader(true);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
      .then(function (response) {
        // handle success

        setPokemonList(response.data.results);
        setIsLoading(false);
        //set all pokemons UI
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
        //default
      });
  }, []);

  const pokemonType = [
    { type: "Normal", color: "default" },
    { type: "Fire", color: "danger" },
    { type: "Water", color: "primary" },
    { type: "Grass", color: "success" },
    { type: "Ghost", color: "dark" },
    { type: "Electric", color: "warning" },
    { type: "Ice", color: "light" },
    { type: "Fighting", color: "danger" },
    { type: "Poison", color: "dark" },
    { type: "Ground", color: "success" },
    { type: "Flying", color: "secondary" },
    { type: "Psychic", color: "info" },
    { type: "Bug", color: "default" },
    { type: "Rock", color: "light" },

    { type: "Dark", color: "dark" },
    { type: "Dragon", color: "danger" },
    { type: "Steel", color: "cyan" },
    { type: "Fairy", color: "teal" },
  ];

  const fetchPokeMokeByType = (type: string) => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/type/" + type.toLowerCase())
      .then(function (response) {
        // handle success

        setsearchedPokemonList(response.data.pokemon);
        setIsLoading(false);
        //set all pokemons UI
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
        //default
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <MDBCol sm="12" xl="12" lg="12" md="12" className="navBarHome">
        <img src={MainLogo} className={"mainLogoHome"} alt="its_hishu" />
      </MDBCol>

      <MDBCol sm="12" xl="12" lg="12" md="12" className="searchBarHome">
        <Search placeholder="Search pokemon..." />
        <MDBCol sm="4" xl="4" lg="4" md="4" className="findBtnWrapper">
          <Button
            style={{ background: "#2f466e !important" }}
            color="primary"
            className="findBtn"
          >
            {" "}
            Find Pokemon{" "}
          </Button>
        </MDBCol>
      </MDBCol>

      <MDBContainer className="btnTypeWrapper">
        {pokemonType.map((pokemonType, index) => (
          <Tag
            key={index}
            name={pokemonType.type}
            color={pokemonType.color}
            BtnClick={fetchPokeMokeByType}
          />
        ))}
      </MDBContainer>

      <MDBCol
        sm="12"
        xl="12"
        lg="12"
        md="12"
        style={{
          marginTop: "50px",
          marginBottom: "400px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {searchedPokemonList.map((pokemon, index) => (
          <MDBCol sm="3" xl="3" lg="3" md="3" style={{ marginTop: "20px" }}>
            <Card style={{ width: "18rem" }}>
              <Img
                src={`https://img.pokemondb.net/artwork/large/${pokemon.pokemon.name}.jpg`}
              />
              <Card.Body>
                <Card.Title>{pokemon.pokemon.name}</Card.Title>

                <Button
                  color="primary"
                  onClick={() => openModel(pokemon.pokemon.name)}
                  variant="primary"
                >
                  Check Profile
                </Button>
              </Card.Body>
            </Card>
          </MDBCol>
        ))}

        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, index) => (
            <MDBCol sm="3" xl="3" lg="3" md="3" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Img
                  style={{ width: "50%" }}
                  src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Button
                    color="primary"
                    onClick={() => openModel(pokemon.name)}
                    variant="primary"
                  >
                    Check Profile
                  </Button>
                </Card.Body>
              </Card>
            </MDBCol>
          ))}

        <div>
          <Modal isOpen={modal} toggle={toggle} className={"ModelHome"}>
            <ModalBody>
              <Pokedex />
            </ModalBody>
            {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>  */}
          </Modal>
        </div>
      </MDBCol>
    </>
  );
}

export default AllPokemons;
