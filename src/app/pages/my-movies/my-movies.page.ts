import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.page.html',
  styleUrls: ['./my-movies.page.scss'],
})
export class MyMoviesPage implements OnInit {

  movie: any[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = [];
    this.getAll();
  }
  getAll(refresher?) {
    this.movieService.getMyMovies().subscribe((res: any) => {
      this.movie = res      
      console.log(this.movie);
    })
  }

}
