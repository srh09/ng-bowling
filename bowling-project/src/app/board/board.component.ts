import { Component, OnInit } from '@angular/core';
import { Option } from '../option.model';
import { ScoringService } from '../scoring.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  
  f1o1: number = 0;
  f1o2: number = null;
  f2o1: number = null;
  f2o2: number = null;
  f3o1: number = null;
  f3o2: number = null;
  f4o1: number = null;
  f4o2: number = null;
  f5o1: number = null;
  f5o2: number = null;
  f6o1: number = null;
  f6o2: number = null;
  f7o1: number = null;
  f7o2: number = null;
  f8o1: number = null;
  f8o2: number = null;
  f9o1: number = null;
  f9o2: number = null;
  f10o1: number = null;
  f10o2: number = null;
  f10o3: number = null;

  sum = null;
  testRoll: number[] = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

  options: Option[] = [
    {value: 0, viewValue: '0'},
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'},
    {value: 7, viewValue: '7'},
    {value: 8, viewValue: '8'},
    {value: 9, viewValue: '9'},
    {value: 10, viewValue: 'X'}
  ];

  constructor(private scoringService: ScoringService) { }

  calculateClick() {
    var rollArray: number[] = [this.f1o1];
    this.sum = this.scoringService.getScore(this.testRoll);

  }
}
