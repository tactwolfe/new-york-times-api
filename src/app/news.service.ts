import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http:HttpClient) { }

  //this function fetch news from nyt api based on genre we want
  getNewsByTopic(topic:string){
  return this.http.get(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${environment.API_KEY}`);
  }
}
