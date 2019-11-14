import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAbility } from '../interfaces/ability';
import { AbilityService } from '../services/ability.service';

@Injectable({
     providedIn: 'root' 
    })
export class AbilityDetailResolver implements Resolve<IAbility>{

    constructor(private _abilityService: AbilityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IAbility | Observable<IAbility> | Promise<IAbility> {
        return this._abilityService.getSingleAbility(route.params.name);
    }

}    
