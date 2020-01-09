import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolver } from './helpers/pokemon-detail.resolver';
import { AbilityDetailComponent } from './components/ability-detail/ability-detail.component';
import { AbilityListComponent } from './components/ability-list/ability-list.component';
import { AbilityDetailResolver } from './helpers/ability-detail.resolver';
import { AbilityListResolver } from './helpers/ability-list.resolver';
import { MoveListResolver } from './helpers/move-list.resolver';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';
import { MoveDetailResolver } from './helpers/move-detail.resolver';


const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component: PokemonSearchComponent
  
  },
  {
  path:'pokemon/:name',
  component: PokemonDetailComponent,
  resolve:
    {
      pokemon: PokemonDetailResolver
    }
  },
  {
    path:'ability/:name',
    component: AbilityDetailComponent,
    resolve:
      {
        ability: AbilityDetailResolver
      }
    },
  {
    path:'ability',
    component: AbilityListComponent,
    resolve:
      {
        abilityList: AbilityListResolver
      }
    },
    {
      path:'move/:name',
      component: MoveDetailComponent,
      resolve:
        {
          move: MoveDetailResolver
        }
      },

      {
        path:'move',
        component: MoveListComponent,
        resolve:
          {
            moveList: MoveListResolver
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
