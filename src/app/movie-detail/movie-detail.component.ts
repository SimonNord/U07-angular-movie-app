import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  selectedMovie;
  selectedMovieCredits;

  imgBaseUrl = "https://image.tmdb.org/t/p/w185/";

  // Dependency injection to get ActivatedRoute, MovieService and Location in this component
  constructor(
    
    private route: ActivatedRoute,
    
    private moviesService : MoviesService,

    private location : Location
    ) { }

  /* on init, run the getMovieDetails which calls MovieService which fetches the 
     details and credits from API.

     Sets the value of class variables selectedMovie, selectedMovieCredits to the result.
  */
  ngOnInit(): void {
    this.getMovieDetails();

  }
  

  getMovieDetails() : void {
    const id  = this.route.snapshot.paramMap.get("movie_id");

    this.moviesService.getMovieDetails(parseInt(id)).subscribe(movie =>  this.selectedMovie = movie);

    this.moviesService.getCredits(id).subscribe(credits => this.selectedMovieCredits = credits);
  }

  // Function to go back to the previous page
  goBack() {
    this.location.back();
  }
}