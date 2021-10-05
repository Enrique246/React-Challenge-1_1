import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <ul>
        <li>{mockPokemonData.name}</li>
        <li>{mockPokemonData.sprites.front_default}</li>
        <li>{mockPokemonData.sprites.front_shiny}</li>
        <li>{mockPokemonData.video}</li>
      </ul>
    </div>
  );
}
