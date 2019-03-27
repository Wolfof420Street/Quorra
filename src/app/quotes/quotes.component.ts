import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import {HttpClient} from '@angular/common/http'
import {Quote} from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  providers:[QuoteService,QuoteRequestService],
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
    this.Quotes[index].showDetails=!this.Quotes[index].showDetails;
  }

  addVotes(index){
    this.Quotes[index].vote += 1;
    if(this.Quotes[index].vote > this.maxCount) this.maxCount=this.Quotes[index].vote;
    else if (this.Quotes[index].vote <= this.maxCount) console.log(this.maxCount);
  }

  minusVotes(index){
    if(this.Quotes[index].vote > 0)this.Quotes[index].vote -= 1;
    else this.Quotes[index].vote = 0;
    console.log(this.Quotes[index].vote);
  }

  highVotes(index){
    let max:number;
    console.log("Initial is: "+(max+1));
     if(this.Quotes[index].vote>max+0){
      max = this.Quotes[index].vote;
       console.log("Maximum is: "+max);
     }
   }

  quoteDeleted(del, index){
    if(del){
      this.Quotes.splice(index,1);
      this.alertService.alertMe("Quote has been deleted")
    }
  }

  addQuote(quote){
    let quoteslength = this.Quotes.length;
    quote.id = quoteslength+1;
    quote.date = new Date(quote.date);
    console.log(quote);
    this.Quotes.push(quote);
    console.log(this.Quotes);
    console.log(quote.date);
    console.log(quote.txtQuote);
  }
  constructor(quoteService:QuoteService,alertService:AlertsService,quoteService:QuoteRequestService) {
  this.quotes = quoteService.getQuotes();
  this.alertService = alertService; //make the service available to the class
   }
  ngOnInit() {
    interface ApiResponse{
       quote:string;
       author:string
   }
   this.quoteService.quoteRequest()
  this.quote=this.quoteService.quote
   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json (Links to an external site.)Links to an external site.").subscribe(data=>{
       this.quote= new Quote(data.quote,data.author)
   }, err=>{
         this.quote= new Quote("Never, never, never give up.","winston churchill")
         console.log("Error occured ")
     })
  }

}
