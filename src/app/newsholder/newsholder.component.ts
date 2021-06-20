import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-newsholder',
  templateUrl: './newsholder.component.html',
  styleUrls: ['./newsholder.component.scss']
})
export class NewsholderComponent implements OnInit {

  topic=""; //this will hold the url
  query=""; //this will hold our genre
  newsData:any; //this will hold news json

  constructor( private newsService:NewsService , private router:Router) { //injecting our news service to get news json and router module to try and get the current link
    this.topic = this.router.url //getting the current url
    this.query =this.topic.slice(1,this.topic.length); //splicing the current url to get the genre of the news we want to fetch from the api
    if(this.query === ""){
      this.query = "home" //if we are in default route the fetch news from home category
    }
    console.log(this.query);  
   }

  ngOnInit(): void {
    //calling this function when this component initialize to fetch news data
    this.loadNews();
  }

  //the function that subscribe to our new service that fetches various news article according to the category
  loadNews(){
    this.newsService.getNewsByTopic(this.query).subscribe((res:any)=>{
      this.newsData = res.results;
      console.log(this.newsData);
      
    })
  }

}
