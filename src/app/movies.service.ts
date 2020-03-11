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
  apiUrl: string;
  result: Movie[];
  searchQuery: string;

  constructor(private http: HttpClient) {}
  
  getTopRated(): Observable<Movie[]> {
    this.apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=b33e841dc377dd55c73286b5debd7e09&language=en-US&page=1`;
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
    }

  search(): Observable<any>{
    this.apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=b33e841dc377dd55c73286b5debd7e09&language=en-US&query=${this.searchQuery}}&page=1&include_adult=false`
    return this.http
      .get<any>(this.apiUrl).pipe(map(res => res.results));
  }


  }
