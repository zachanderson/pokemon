import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IMove } from '../interfaces/move';
import { MoveService } from '../services/move.service';

@Injectable({
     providedIn: 'root' 
    })
export class MoveDetailResolver implements Resolve<IMove>{

    constructor(private _moveService: MoveService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IMove | Observable<IMove> | Promise<IMove> {
        return this._moveService.getSingleMove(route.params.name);
    }

}    
