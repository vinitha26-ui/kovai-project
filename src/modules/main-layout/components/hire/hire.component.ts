import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {
  form : any;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.buildForm();
  }
  send(): void {
    alert(`All details submitted successfully`);
  }

  private buildForm(): void {
    this.form  = this.formBuilder.group({
      name: this.formBuilder.control(null,Validators.required),
      email: this.formBuilder.control(null,[Validators.required]),
      message: this.formBuilder.control(null),
    });
  }

  

}
