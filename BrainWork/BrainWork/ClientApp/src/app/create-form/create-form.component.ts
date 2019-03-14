import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'titleName': [null, Validators.required],
      'term': [null, Validators.required],
      'definition': [null, Validators.required],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('titleName').setValidators([Validators.required, Validators.minLength(1)]);
          this.titleAlert = "You need to specify at least 1 character";
        } else {
          this.formGroup.get('titleName').setValidators(Validators.required);
        }
        this.formGroup.get('titleName').updateValueAndValidity();
      }
    )
  }

  get titleName() {
    return this.formGroup.get('titleName') as FormControl
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

}
