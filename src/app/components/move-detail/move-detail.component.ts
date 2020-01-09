import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMove, FlavorTextEntry } from '../../interfaces/move';
import { Location } from '@angular/common';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {

  move: IMove

  constructor(private _route: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit() {
    this.move = this._route.snapshot.data.move;
  }

  goBack(){
    this._location.back();
  }

  get flavorTextEntries(): FlavorTextEntry[]{
    return this.move.flavor_text_entries.filter(x=>x.language.name === 'en');
  }

}
