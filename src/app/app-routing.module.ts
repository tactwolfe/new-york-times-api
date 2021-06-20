import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsholderComponent } from './newsholder/newsholder.component';

const routes: Routes = [
  { path : '' , component:NewsholderComponent},
  { path : 'arts' , component:NewsholderComponent},
  { path : 'automobiles' , component:NewsholderComponent},
  { path : 'books' , component:NewsholderComponent},
  { path : 'business' , component:NewsholderComponent},
  { path : 'fashion' , component:NewsholderComponent},
  { path : 'food' , component:NewsholderComponent},
  { path : 'health' , component:NewsholderComponent},
  { path : 'insider' , component:NewsholderComponent},
  { path : 'magazine' , component:NewsholderComponent},
  { path : 'movie' , component:NewsholderComponent},
  { path : 'nyregion' , component:NewsholderComponent},
  { path : 'obituaries' , component:NewsholderComponent},
  { path : 'opinions' , component:NewsholderComponent},
  { path : 'politics' , component:NewsholderComponent},
  { path : 'realestate' , component:NewsholderComponent},
  { path : 'science' , component:NewsholderComponent},
  { path : 'sports' , component:NewsholderComponent},
  { path : 'sundayreview' , component:NewsholderComponent},
  { path : 'technology' , component : NewsholderComponent},
  { path : 'theater' , component:NewsholderComponent},
  { path : 't-magazine' , component:NewsholderComponent},
  { path : 'travel' , component:NewsholderComponent},
  { path : 'upshot' , component:NewsholderComponent},
  { path : 'us' , component:NewsholderComponent},
  { path : 'world' , component:NewsholderComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
