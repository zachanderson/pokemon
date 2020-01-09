import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAbility, FlavorTextEntry } from '../../interfaces/ability';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.scss']
})
export class AbilityDetailComponent implements OnInit {

  ability: IAbility

  constructor(private _route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit() {
    this.ability = this._route.snapshot.data.ability;
  }

  goBack(){
    this._location.back();
  }

  get flavorTextEntries(): FlavorTextEntry[]{
    return this.ability.flavor_text_entries.filter(x=>x.language.name === 'en');
  }

}
