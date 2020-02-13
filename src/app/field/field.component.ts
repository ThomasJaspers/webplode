import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../shared/interfaces/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() field: Field;
  @Output() makeMoveEvent = new EventEmitter<Field>();

  constructor() { }


  makeMove() {
    console.log('Make move ' + this.field.row + ' ' + this.field.col);
    this.makeMoveEvent.emit(this.field);
  }

  ngOnInit(): void {
  }

}
