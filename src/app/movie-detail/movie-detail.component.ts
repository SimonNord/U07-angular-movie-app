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

  constructor(
    
    private route: ActivatedRoute,
    
    private moviesService : MoviesService,

    private location : Location
    ) { }

  ngOnInit(): void {
    this.getMovieDetails();

  }
  

  getMovieDetails() : void {
    const id  = this.route.snapshot.paramMap.get("movie_id");

    this.moviesService.getMovieDetails(parseInt(id)).subscribe(movie => this.selectedMovie = movie);

    this.moviesService.getCredits(id).subscribe(credits => this.selectedMovieCredits = credits);
  
  
     /*   let movie = this.moviesService.getMovieDetails(id);
    let credits = this.moviesService.getCredits(id);

    const result = concat(movie,credits);

    result.subscribe(result => console.log(result)); */
  }

  goBack() {
    this.location.back();
  }
}