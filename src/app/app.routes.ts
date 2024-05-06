import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TutorialComponent} from "./pages/tutorial/tutorial.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: '', component: TutorialComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
