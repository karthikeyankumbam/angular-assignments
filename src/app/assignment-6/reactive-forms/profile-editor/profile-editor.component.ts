import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  // Nested Forms 
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',customValidator()),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value=control.value;
    // console.log(value);
    const isValid=value=="lastname" ? null : { customError: true };
    // console.log(isValid);
    return isValid;
  };
}