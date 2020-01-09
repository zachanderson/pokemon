import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMove  } from '../interfaces/move';
import { Observable } from 'rxjs';
import { ISearchResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  currentMove: IMove;

  private _host: string = 'https://pokeapi.co/api/v2/';
  itemsPerPage: number = 10;
  

  constructor(private httpClient: HttpClient) {     
  }


  getAllMove(): Observable<ISearchResponse>{
    return this.httpClient
    .get<ISearchResponse>(`${this._host}move`);
  }

  getSingleMove(name: string): Observable<IMove>{
    return this.httpClient
    .get<IMove>(`${this._host}move/${name}`);

  }


}
