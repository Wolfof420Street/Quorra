import {Quote} from './quotes';
export var Quotes:Quote[]=
  [
   new Quotes(1,'Francis Scott Key Fitzgerald','First you take a drink, then the drink takes a drink, then the drink takes you.',new Date(2019,0,25)),
   new Quotes(2,'Lu Yu','Its liquor is like the sweetest dew from Heaven.',new Date(2018,2,29)),
   new Quotes(3,'Ogden Nash', 'Candy is dandy. But liquor is quicker',new Date(2017,2,25)),
   new Quotes(4,'Ernest Hemingway', 'Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.',new Date(2019,3,20)),
   new Quotes(5,'William Butler Yeats', 'The worst thing about some men is that when they are not drunk they are sober.',new Date(2018,6,25)),
   new Quotes(6,'Richard Brinsley Sheridan', 'A bumper of good liquor will end a contest quicker than justice, judge, or vicar.',new Date(2019,2,25))
 ]


export class Quotes {
    public id:number; public author:string; public txtQuote:string; public showDetails: boolean; public date:Date; public vote:number;
    public maxCount:number=0;
    constructor(id,author,txtQuote, date){
        this.id = id;
        this.author = author;
        this.txtQuote = txtQuote;
        this.date = date;
        this.vote = 0;
        this.showDetails = false;
    }
}
