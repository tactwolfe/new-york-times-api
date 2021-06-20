import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //the value we have expected to get passed as parameter to our card component
  @Input('abstract')abstract='';
  @Input('byline')byline='';
  @Input('created_date')created_date='';
  @Input('item_type')item_type='';
  @Input('section')section='';
  @Input('title')title='';
  @Input('url')url='';
  @Input('imageurl')imageurl='';
  constructor() { }

  ngOnInit(): void {
  }

}
