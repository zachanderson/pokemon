import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IPokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root' 
    })
export class PokemonDetailResolver implements Resolve<IPokemon>{

    constructor(private _pokemonService: PokemonService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPokemon | Observable<IPokemon> | Promise<IPokemon> {
        return this._pokemonService.getSingle(route.params.id);
    }

}    
