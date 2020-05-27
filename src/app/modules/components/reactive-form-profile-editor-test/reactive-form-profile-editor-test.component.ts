import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-profile-editor-test',
  templateUrl: './reactive-form-profile-editor-test.component.html',
  styleUrls: ['./reactive-form-profile-editor-test.component.scss']
})
export class ReactiveFormProfileEditorTestComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstForm: new FormControl(''),
  //   lastForm: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   })
  // });

  profileForm = this.fb.group({
    firstForm: ['', Validators.required],
    lastForm: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateValue() {
    this.profileForm.patchValue({
      firstForm: 'Danny',
      address: {
        street: '18y CD YOU'
      }
    });
  }

  addAlias() {
  this.aliases.push(this.fb.control(''));
}

}
