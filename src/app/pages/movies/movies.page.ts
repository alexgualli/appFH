import { MovieService, SearchType } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { MovieService, SearchType } from '../../../environments/environment.prod';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  type: SearchType = SearchType.all;
  searchTerm: any = "";
  movie: any[];
  movieFilter: any[];

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = [];
    this.getAll();
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchDataJson(this.searchTerm, this.type);
  }



  setFilteredItems() {
    this.movie = this.filterItems(this.searchTerm);
  }


  filterItems(searchTerm) {
    this.movie = this.movieFilter;
    if(searchTerm==''){
      this.getAll();
    }
    else{
      return this.movie.filter((item) => {
        return item.Title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }

  doRefresh(refresher){
    this.getAll(refresher);
    setTimeout(() => {      
      refresher.target.complete();
    }, 1000);
    
  }

  getAll(refresher?) {
    this.movieService.getAll().subscribe((res: any) => {
      this.movie = res
      this.movieFilter=res
      console.log(this.movie);
    })
  }
}