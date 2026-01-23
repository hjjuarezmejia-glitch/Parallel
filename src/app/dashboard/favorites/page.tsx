import Image from "next/image";
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";
import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
 title: 'Favoritos',
 description: 'Son los Pokemóns seleccionados',
};

export default async function FavouritesPage() {


  return (
    <div className="flex flex-col">

        <span className="text-5xl my-2">Pokémons Favoritos<small className="text-blue-500">  Global State</small></span>

      <FavoritePokemons/>
      
    </div>
  );
}

