import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-test',
  templateUrl: './reactive-forms-test.component.html',
  styleUrls: ['./reactive-forms-test.component.scss']
})
export class ReactiveFormsTestComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateValue() {
    this.name.setValue('Chen');
  }

}
