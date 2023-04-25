import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

/* @Injectable({
  providedIn: 'root'
  // ceci permet d'utiliser la même instance de ce service dans toute l'application
  // pattern singleton : une instance de service dans toute l'application
}) */

@Injectable()
export class PokemonService {

  getPokemonList() : Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonid : number): Pokemon|undefined{
    return POKEMONS.find(a => a.id == pokemonid);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
