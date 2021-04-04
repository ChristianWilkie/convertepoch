import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimeComponent} from './time/time.component';
import {DayComponent} from './day/day.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'time', component: TimeComponent},
  {path: 'day', component: DayComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'time', pathMatch: 'full'},
  {path: '**', redirectTo: 'time'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
