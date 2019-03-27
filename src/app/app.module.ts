import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertsService} from './alert-service/alerts.service'
import {HttpClientModule} from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    DateCountPipe,
      QuotesFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule // progress bar to load http requests
  ],
  export class AppModule { }
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
