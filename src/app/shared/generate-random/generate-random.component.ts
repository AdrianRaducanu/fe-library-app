import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-random',
  templateUrl: './generate-random.component.html',
  styleUrls: ['./generate-random.component.scss']
})
export class GenerateRandomComponent implements OnInit {

  categories: String[] =[];
  weight: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  weightRandomGenerator(categories : String[], weight:number[] ){
    let randomCategoryBook: String = "";

    let cumulativeWeights:number[] = [];

    for (let i = 0; i < weight.length; i += 1) {
      cumulativeWeights[i] = weight[i] + (cumulativeWeights[i - 1] || 0);
    }
    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();

    for (let itemIndex = 0; itemIndex < categories.length; itemIndex += 1) {
      if (cumulativeWeights[itemIndex] >= randomNumber) {
        randomCategoryBook = categories[itemIndex];
        break;
      }
    }
    return randomCategoryBook;
  }
}
