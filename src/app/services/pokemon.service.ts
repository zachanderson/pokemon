import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISearchResponse, IPokemon } from '../interfaces/pokemon';
import { tap } from 'rxjs/operators';
import { IAbility  } from '../interfaces/ability';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _host: string = 'https://pokeapi.co/api/v2/';
  itemsPerPage: number = 10;
  
  searchResponse$: BehaviorSubject<ISearchResponse | undefined> = new BehaviorSubject<ISearchResponse>(undefined); 
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);  

  constructor(private httpClient: HttpClient) {     
  }

  search(page: number=1): void {

    let url=`${this._host}pokemon?limit=${this.itemsPerPage}&offset=${page * this.itemsPerPage}`;
    this.httpClient
    .get<ISearchResponse>(`${this._host}pokemon?limit=${this.itemsPerPage}&offset=${page * this.itemsPerPage}`)
    .pipe(
      tap((value: ISearchResponse)=>{
        value.results.forEach(result=> result.id = result.url.split(/\//)[6]);
        this.searchResponse$.next(value);
        this.currentPage$.next(page)
      })
    ).subscribe();
  }

  pager(page: number){
    this.search(page);
  }

  getSingle(id: string): Observable<IPokemon>{
    return this.httpClient
    .get<IPokemon>(`${this._host}pokemon/${id}`);

  }

}
