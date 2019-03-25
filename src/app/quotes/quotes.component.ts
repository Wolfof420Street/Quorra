import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public maxCount =0;

  newQuotes = [
    new Quotes(1,'Francis Scott Key Fitzgerald','First you take a drink, then the drink takes a drink, then the drink takes you.',new Date(2019,0,25)),
    new Quotes(2,'Lu Yu','Its liquor is like the sweetest dew from Heaven.',new Date(2018,2,29)),
    new Quotes(3,'Ogden Nash', 'Candy is dandy. But liquor is quicker',new Date(2017,2,25)),
    new Quotes(4,'Ernest Hemingway', 'Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.',new Date(2019,3,20)),
    new Quotes(5,'William Butler Yeats', 'The worst thing about some men is that when they are not drunk they are sober.',new Date(2018,6,25)),
    new Quotes(6,'Richard Brinsley Sheridan', 'A bumper of good liquor will end a contest quicker than justice, judge, or vicar.',new Date(2019,2,25)),

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
  constructor() { }

  ngOnInit() {
  }

}
