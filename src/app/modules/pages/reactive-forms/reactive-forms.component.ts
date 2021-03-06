import { Component, OnInit } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
