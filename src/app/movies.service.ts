import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs' ;
import { HttpClientModule, HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}
  
  getTopRated(): Observable<Movie[]> {
    this.apiUrl = `${this.baseApiUrl}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
    }

    getMovieDetails(movie_id:number) : Observable<Movie> {
      this.apiUrl = `${this.baseApiUrl}/movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`;
      return this.http
      .get<any>(this.apiUrl);
    }

  search(): Observable<any>{
    this.apiUrl = `${this.baseApiUrl}/search/multi?api_key=${this.API_KEY}&language=en-US&query=${this.searchQuery}}&page=1&include_adult=false`
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
  }

  getCredits(movie_id) {
    this.apiUrl = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.API_KEY}`;
    return this.http
    .get<any>(this.apiUrl).pipe(map(res => res.results));
    
  }
  }
