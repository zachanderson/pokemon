import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbility  } from '../interfaces/ability';
import { Observable } from 'rxjs';
import { ISearchResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  currentAbility: IAbility;

  private _host: string = 'https://pokeapi.co/api/v2/';
  itemsPerPage: number = 10;
  

  constructor(private httpClient: HttpClient) {     
  }


  getAllAbility(): Observable<ISearchResponse>{
    return this.httpClient
    .get<ISearchResponse>(`${this._host}ability`);
  }

  getSingleAbility(name: string): Observable<IAbility>{
    return this.httpClient
    .get<IAbility>(`${this._host}ability/${name}`);

  }


}
