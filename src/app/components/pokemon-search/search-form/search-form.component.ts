import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
  }

  search(){
    this._pokemonService.search();
  }

}
