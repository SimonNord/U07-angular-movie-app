import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs' ;
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_KEY = "b33e841dc377dd55c73286b5debd7e09";
  apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=b33e841dc377dd55c73286b5debd7e09";
  topRatedMovies :any = [];

  constructor(private http: HttpClient) { }
  
  getTopRated(){
    let result = this.http.get<Movie[]>(`${this.apiUrl}${this.API_KEY}`);
    this.topRatedMovies.push(result);
    console.log(this.topRatedMovies);
  }
}
