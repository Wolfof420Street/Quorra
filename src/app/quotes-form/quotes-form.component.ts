import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuoteForm = new Quotes(0,"","",new Date());
  @Output() addNewQuote = new EventEmitter<Quotes>();

  submitQuote(){
  this.addQuote.emit(this.newQuotes)
  
  constructor() { }

  ngOnInit() {
  }

}
