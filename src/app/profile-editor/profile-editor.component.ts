import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray ,Validators  } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
  this.aliases.push(this.fb.control(''));
  }
}