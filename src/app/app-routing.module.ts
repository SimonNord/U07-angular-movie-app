import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'topRatedMovies', component: TopRatedMoviesComponent },
  { path: 'movieDetails/:movie_id', component: MovieDetailComponent },
  { path: '', redirectTo: "topRatedMovies", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }