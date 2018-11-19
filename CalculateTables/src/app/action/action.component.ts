import {Component} from '@angular/core';

export interface Action {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})

export class ActionComponent {
  get selected() {
    return this._selected;
  }

  set selected(value) {
    this._selected = value;
  }
 actions: Action[] = [
  {value: '+', viewValue: '+'},
  {value: '-', viewValue: '-'},
  {value: '*', viewValue: '*'},
  {value: '/', viewValue: '/'}
];
 private _selected: string;
}
