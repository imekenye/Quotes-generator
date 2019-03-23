import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { UpvoteComponent } from "./upvote/upvote.component";
import { QuoteComponent } from "./quote/quote.component";
import { DateCountPipe } from './date-count.pipe';
import { DownvoteComponent } from './downvote/downvote.component';
import { FormsModule } from '@angular/forms';
// import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    UpvoteComponent,
    QuoteComponent,
    DateCountPipe,
    DownvoteComponent,
    // AngularFontAwesomeModule,
  ],
  imports: [BrowserModule, 
  FormsModule,
  AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
