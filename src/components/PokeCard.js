import React from "react";
import { mockPokemonData } from "../mock/pokeData";
import pokeData from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <PokeCard data={mockPokemonData} />
    </div>
  );
}
