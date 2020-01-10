import { Component, OnInit } from '@angular/core';
import { Option } from '../option.model';
import { ScoringService } from '../scoring.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  
  f1o1: number = null;
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

  options: Option[] = [
    {value: 0, viewValue: '0 Pins'},
    {value: 1, viewValue: '1 Pin'},
    {value: 2, viewValue: '2 Pins'},
    {value: 3, viewValue: '3 Pins'},
    {value: 4, viewValue: '4 Pins'},
    {value: 5, viewValue: '5 Pins'},
    {value: 6, viewValue: '6 Pins'},
    {value: 7, viewValue: '7 Pins'},
    {value: 8, viewValue: '8 Pins'},
    {value: 9, viewValue: '9 Pins'},
    {value: 10, viewValue: '10 Pins'},
    {value: null, viewValue: 'null'}
  ];

  constructor(private scoringService: ScoringService) { }

  calculateClick() {
    var rollArray: number[] = [
      this.f1o1, this.f1o2, this.f2o1, this.f2o2, this.f3o1, this.f3o2, this.f4o1, this.f4o2, this.f5o1, this.f5o2, this.f6o1, this.f6o2,
      this.f7o1, this.f7o2, this.f8o1, this.f8o2, this.f9o1, this.f9o2, this.f10o1, this.f10o2, this.f10o3
    ];
    rollArray = rollArray.filter(function (el) {return el != null;});
    this.sum = this.scoringService.getScore(rollArray);
  }

  clearClick() {
    this.f1o1 = null, this.f1o2 = null, this.f2o1 = null, this.f2o2 = null, this.f3o1 = null, this.f3o2 = null,
    this.f4o1 = null, this.f4o2 = null, this.f5o1 = null, this.f5o2 = null, this.f6o1 = null, this.f6o2 = null,
    this.f7o1 = null, this.f7o2 = null, this.f8o1 = null, this.f8o2 = null, this.f9o1 = null, this.f9o2 = null,
    this.f10o1 = null, this.f10o2 = null, this.f10o3 = null, this.sum = null
  }

  validationCheck(rollOne: number) {
    if (rollOne == null || rollOne == 10) {
      return false;
    }
    return true;
  }

  isNaN(evaluatedNumber: number) {
    return Number.isNaN(evaluatedNumber);
  }
}
