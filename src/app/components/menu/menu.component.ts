import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pagesSwitch:number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  switchToMain():void {
    this.pagesSwitch = 1;
  }
  switchToBooks():void {
    this.pagesSwitch = 2;
  }
  switchToRandom():void {
    this.pagesSwitch = 3;
  }
  switchToAccount():void {
    this.pagesSwitch = 4;
  }
}
