import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '5ca932a7';    
  urljson='https://api.myjson.com/bins/b7fn8';
  constructor(private http: HttpClient) { }
 
  searchData(title: string, type: SearchType): Observable<any> {
    //console.log(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  searchDataJson(title: string, type: SearchType): Observable<any> {
    //console.log(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
    console.log(this.http.get(`${this.urljson}?type=${type}`));
    return this.http.get(`${this.urljson}?type=${type}`).pipe(
      map(results => results['Search'])
      
    );
  }
 
  getDetails(id) {    
    const path='https://api.myjson.com/bins/k4akk';
    return this.http.get(path);    
  }

  getAll(){
    return this.http.get(`${this.urljson}`).pipe(
      map(results => results['Search'])
    );
  }
}
