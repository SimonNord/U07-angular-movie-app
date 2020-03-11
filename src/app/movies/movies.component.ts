import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 movies = [{
   title : "Title",
   Description: "jdsadi lsad aljasd ljasd ald ad"
 },
 {
 title : "Title 2",
 Description: "dsda lsadsadas alj asd aasd ljasd ald ad"
}];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }


}
