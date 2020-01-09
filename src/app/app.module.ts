import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { SearchFormComponent } from './components/pokemon-search/search-form/search-form.component';
import { SearchResultsComponent } from './components/pokemon-search/search-results/search-results.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { AbilityDetailComponent } from './components/ability-detail/ability-detail.component';
import { AbilityListComponent } from './components/ability-list/ability-list.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    NotFoundComponent,
    PokemonDetailComponent,
    AbilityDetailComponent,
    AbilityListComponent,
    MoveListComponent,
    MoveDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
