import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Frame } from '../frame.model';
import { Option } from '../option.model';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {

  @Input() frame: Frame;
  @Output() private randomNumber = new EventEmitter<number[]>();

  roll1: number = null;
  roll2: number = null;
  name: string = '';
  selectedOption1: string;
  printedOption1: string;

  selectedOption2: string;
  printedOption2: string;

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

  print() {
    this.printedOption1 = this.selectedOption1;
  }

  public generateNumber() {
    var numberArray: number[] = [this.roll1, this.roll2];
    this.randomNumber.emit(numberArray);
  }
}
