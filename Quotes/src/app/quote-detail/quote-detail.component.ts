import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  numberOfUpvotes : number = 0;

  upvoteButtonClick (){
    this.numberOfUpvotes ++;
  }

  numberOfDownvotes : number = 0
  downvoteButtonClick (){
    this.numberOfDownvotes ++;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
