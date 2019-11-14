import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAbility } from '../../interfaces/ability';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.scss']
})
export class AbilityDetailComponent implements OnInit {

  ability: IAbility

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.ability = this._route.snapshot.data.ability;
  }

}
