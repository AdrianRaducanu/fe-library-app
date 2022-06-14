import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { RandomPageComponent } from './components/random-page/random-page.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { BookMiniComponent } from './components/book-mini/book-mini.component';
import { BookMaxComponent } from './components/book-max/book-max.component';
import {FormsModule} from "@angular/forms";
import { StarsComponent } from './components/shared/stars/stars.component';
import { ReviewComponent } from './components/shared/review/review.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainPageComponent,
    BooksPageComponent,
    RandomPageComponent,
    AccountPageComponent,
    BookMiniComponent,
    BookMaxComponent,
    StarsComponent,
    ReviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
