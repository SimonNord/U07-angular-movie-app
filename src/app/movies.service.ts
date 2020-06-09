import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_KEY = "b33e841dc377dd55c73286b5debd7e09";
  baseApiUrl = "https://api.themoviedb.org/3";
  apiUrl: string;
  results: Movie[];
  searchQuery: string;

  // when initializing a new instance of MovieService, get a new instance of HttpClient as a private variable
  constructor(private http: HttpClient) {}
  
  // Gets top rated movie from API and returns an Observable with type Movie array
  getTopRated(): Observable<Movie[]> {
    this.apiUrl = `${this.baseApiUrl}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
    }

     // Gets movie details movie from API and returns an Observable with type Movie
  getMovieDetails(movie_id:number): Observable<Movie> {
    this.apiUrl = `${this.baseApiUrl}/movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`;
    return this.http
    .get<any>(this.apiUrl);
  }

  // Gets movies and actors from API that is relevant to the searchQuery and returns an Observable with type any
  search(searchQuery: string):Observable<any> {
    this.apiUrl = `${this.baseApiUrl}/search/multi?api_key=${this.API_KEY}&language=en-US&query=${searchQuery}}&page=1&include_adult=false`
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
  }

  // Gets movie credits from API that is relevant to the selected movie and returns an Observable with type any
  getCredits(movie_id) : Observable<any> {
    this.apiUrl = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.API_KEY}`;
    return this.http
    .get<any>(this.apiUrl).pipe(map(res => res.cast));
    
  }
  }
