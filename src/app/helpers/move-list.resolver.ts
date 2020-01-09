import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MoveService } from '../services/move.service';
import { ISearchResponse } from '../interfaces/pokemon';

@Injectable({
     providedIn: 'root' 
    })
export class MoveListResolver implements Resolve<ISearchResponse>{

    constructor(private _moveService: MoveService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISearchResponse | Observable<ISearchResponse> | Promise<ISearchResponse> {
        return this._moveService.getAllMove();
    }

}    
