import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  providers:[QuoteService],
  styleUrls: ['./quotes.component.css']

})
export class QuotesComponent implements OnInit {
  public maxCount =0;

  quotes:Quote[];
  alertService : AlertsService
  constructor(quoteService:QuoteService) {
  this.quotes = quoteService.getQuotes()
   }

   detailsToggle(index){
    this.newQuotes[index].showDetails=!this.newQuotes[index].showDetails;
  }

  addVotes(index){
    this.newQuotes[index].vote += 1;
    if(this.newQuotes[index].vote > this.maxCount) this.maxCount=this.newQuotes[index].vote;
    else if (this.newQuotes[index].vote <= this.maxCount) console.log(this.maxCount);
  }

  minusVotes(index){
    if(this.newQuotes[index].vote > 0)this.newQuotes[index].vote -= 1;
    else this.newQuotes[index].vote = 0;
    console.log(this.newQuotes[index].vote);
  }

  highVotes(index){
    let max:number;
    console.log("Initial is: "+(max+1));
     if(this.newQuotes[index].vote>max+0){
      max = this.newQuotes[index].vote;
       console.log("Maximum is: "+max);
     }
   }

  quoteDeleted(del, index){
    if(del){
      this.newQuotes.splice(index,1);
      this.alertService.alertMe("Quote has been deleted")
    }
  }

  addQuote(quote){
    let quoteslength = this.newQuotes.length;
    quote.id = quoteslength+1;
    quote.date = new Date(quote.date);
    console.log(quote);
    this.newQuotes.push(quote);
    console.log(this.newQuotes);
    console.log(quote.date);
    console.log(quote.txtQuote);
  }
  constructor(quoteService:QuoteService,alertService:AlertsService) {
  this.quotes = quoteService.getQuotes();
  this.alertService = alertService; //make the service available to the class
   }
  ngOnInit() {
  }

}
