import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAbility } from '../../interfaces/ability';
import { ISearchResponse } from '../../interfaces/pokemon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.scss']
})
export class AbilityListComponent implements OnInit {

  abilityList: ISearchResponse;

  constructor(private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this.abilityList = this._route.snapshot.data.abilityList;
  }

  goBack(){
    this._location.back();
  }
}
