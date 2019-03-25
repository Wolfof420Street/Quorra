import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuoteForm = new Quotes(0,"","",new Date());
  newQuoteForm = [new Quotes(0,"","")];
  @Output() addNewQuote = new EventEmitter<Quotes>();

  submitQuote(newOne){
    this.newQuoteForm.push(new Quotes(newOne.value.id++,newOne.value.author,newOne.value.author));
    console.log(newOne.value.date);
    this.newQuoteForm.push(newOne);
    this.addNewQuote.emit(new Quotes(newOne.value.id++,newOne.value.author,newOne.value.txtQuote,newOne.value.date));
    console.log(newOne.value.author);
    newOne.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
