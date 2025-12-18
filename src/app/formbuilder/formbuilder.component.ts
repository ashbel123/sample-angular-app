import { Component } from '@angular/core';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
  constructor(private formBuilder: FormBuilder) {}

  productForm = this.formBuilder.group({
    productid: [0, [Validators.required, Validators.minLength(8)]],
    brand: [''],
    description: this.formBuilder.group({
      age: [0],
      seasons: [''],
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
  });

  onSubmit() {
    console.log('from onSubmit().............');
    console.log(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['productid'].value);
    // console.log(this.productForm.get('brand').value);
    console.log(this.productForm.controls['description'].controls['age'].value);
    console.log(this.productForm.controls['suppliers'].controls[0].value);

    //  this.product.productId = this.productForm.controls['productid'].value!;
    // console.log('from product ', this.product.productId);
  }

  get suppliers() {
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier() {
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }


}
