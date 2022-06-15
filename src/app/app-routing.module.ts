import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {BooksPageComponent} from "./components/books-page/books-page.component";
import {RandomPageComponent} from "./components/random-page/random-page.component";
import {AccountPageComponent} from "./components/account-page/account-page.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'books-page',
    component: BooksPageComponent
  },
  {
    path: 'random-page',
    component: RandomPageComponent,
  },
  {
    path: 'account-page',
    component: AccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
