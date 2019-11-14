import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ISearchResponse } from 'src/app/interfaces/pokemon';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResponse$: Observable<ISearchResponse | undefined>;
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  private _maxPages: number=5;

  constructor(private _pokemonService: PokemonService) { 
    this.searchResponse$ = this._pokemonService.searchResponse$.asObservable();

    this._pokemonService.searchResponse$
    .pipe(
      tap((sr:ISearchResponse)=> this.totalPages = sr ? Math.min(this._maxPages, Math.ceil(sr.count/this._pokemonService.itemsPerPage)): 0),
      tap((sr:ISearchResponse)=> this.pageNumbers = Array(this.totalPages).fill(0).map((x,i)=>i+1))
    )
    .subscribe();

    this._pokemonService.currentPage$
    .pipe(
      tap((page: number)=> this.currentPage = page),
    )
    .subscribe();
  }

  ngOnInit() {
  }

  pager(page:number): void {
    this._pokemonService.pager(page);
  }

  
}
