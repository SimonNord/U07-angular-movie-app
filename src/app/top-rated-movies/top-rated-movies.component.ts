import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

topRatedMovies;

imgBaseUrl = "https://image.tmdb.org/t/p/w185/";

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.getTopRated();
  }

  getTopRated(): void {
    this.moviesService.getTopRated().subscribe(movies => this.topRatedMovies = movies);
  }

}
