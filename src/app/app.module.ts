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

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    SearchFormComponent,
    SearchResultsComponent,
    NotFoundComponent,
    PokemonDetailComponent
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
