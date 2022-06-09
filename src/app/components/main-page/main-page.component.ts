import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  toggleVar:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle():void{
    this.toggleVar = !this.toggleVar;
  }
}
