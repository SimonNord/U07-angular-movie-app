import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  selectedMovie;

  constructor(
    
    private route: ActivatedRoute,
    
    private moviesService : MoviesService
    ) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }
  

  getMovieDetails() : void {
    const id  = this.route.snapshot.paramMap.get("movie_id");
    this.moviesService.getMovieDetails(id).subscribe(movie => this.selectedMovie = movie);
  }
}