import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolver } from './helpers/pokemon-detail.resolver';


const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component: PokemonSearchComponent
  
  },
  {
  path:'pokemon/:id',
  component: PokemonDetailComponent,
  resolve:
    {
      pokemon: PokemonDetailResolver
    }
  },
  {
    path:'**',
    component:NotFoundComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
