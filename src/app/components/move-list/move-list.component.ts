import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMove } from '../../interfaces/move';
import { ISearchResponse } from '../../interfaces/pokemon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  moveList: ISearchResponse;

  constructor(private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this.moveList = this._route.snapshot.data.moveList;
  }

  goBack(){
    this._location.back();
  }

}
