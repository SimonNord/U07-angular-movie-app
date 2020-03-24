import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

topRatedMovies = [];
searchQuery: string = "";

imgBaseUrl = "https://image.tmdb.org/t/p/w185/";

// Dependency injection to get MovieService in this component
  constructor(private moviesService: MoviesService) { }

  // After the component has been initialized run the function getTopRated
  ngOnInit(): void {
   this.getTopRated();
  }

  // runs getTopRated from the movieService and sets the class variable topRatedMovies to the result
  getTopRated(): void {
    this.moviesService.getTopRated().subscribe(movies => {
      this.topRatedMovies = movies;
      });
  }

  // runs the search function from moviesService and sets the class variable topRatedMovies to the result
  search(){
    this.moviesService.search(this.searchQuery).subscribe(filteredMovies => {
      this.topRatedMovies = filteredMovies;
    });
  }

}
