import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent }      from './movies/movies.component';
import { FavComponent }   from './fav/fav.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MovieDetailComponent }  from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fav', component: FavComponent },
  //{ path: '/movies?page=:npage&records=:n'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
