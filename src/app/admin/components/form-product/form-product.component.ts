import { Component, OnInit } from '@angular/core';
/*
* FormGroup -> tener varios o un grupo de  controles
*/
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  )
  {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: '',
      description: ['', [Validators.required]],
    });
  }
}
