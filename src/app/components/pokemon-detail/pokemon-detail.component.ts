import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../../interfaces/pokemon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon:IPokemon;
  constructor(private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this.pokemon = this._route.snapshot.data.pokemon;
  }

  get frontImage(): string {
    return this.pokemon.sprites.front_default
  }

  goBack(){
    this._location.back();
  }

}
