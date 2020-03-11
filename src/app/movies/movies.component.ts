import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

topRatedMovies;
imgBaseUrl = "https://image.tmdb.org/t/p/w185/"

  constructor() { }

  ngOnInit(){}

  
}
