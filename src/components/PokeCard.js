import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { mockPokemonData } from "../mock/pokeData";
export default function PokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>

      <img src={mockPokemonData.sprites.front_shiny} alt="pic" />
      <img src={mockPokemonData.sprites.front_default} alt="pic" />
      <div>
        <a href={mockPokemonData.video} target="blank_">
          Link to video
        </a>
      </div>
    </div>
  );
}
