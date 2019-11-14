import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AbilityService } from '../services/ability.service';
import { ISearchResponse } from '../interfaces/pokemon';

@Injectable({
     providedIn: 'root' 
    })
export class AbilityListResolver implements Resolve<ISearchResponse>{

    constructor(private _abilityService: AbilityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISearchResponse | Observable<ISearchResponse> | Promise<ISearchResponse> {
        return this._abilityService.getAllAbility();
    }

}    
