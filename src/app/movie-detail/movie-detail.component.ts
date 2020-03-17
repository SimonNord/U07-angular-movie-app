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
    this.moviesService.getMovieDetails(id).subscribe(movie => this.selectedMovie = movie);
  }

  goBack() {
    this.location.back();
  }
}