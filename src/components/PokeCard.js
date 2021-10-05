import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>

      <img src={mockPokemonData.sprites.front_shiny} alt="pic" />
      <img src={mockPokemonData.sprites.front_default} alt="pic" />

      <p>
        <a href={mockPokemonData.video}></a>
      </p>
    </div>
  );
}
