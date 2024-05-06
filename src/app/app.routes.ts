import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {MarathonViewComponent} from "./marathon/pages/marathon-view/marathon-view.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marathon/records', component: MarathonViewComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
