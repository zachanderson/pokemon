import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAbility } from '../../interfaces/ability';
import { ISearchResponse } from '../../interfaces/pokemon';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.scss']
})
export class AbilityListComponent implements OnInit {

  abilityList: ISearchResponse;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.abilityList = this._route.snapshot.data.abilityList;
  }
}
