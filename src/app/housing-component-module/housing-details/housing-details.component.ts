import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  form: FormGroup;
  employees: FormArray
  constructor(private formBuilder: FormBuilder) { }

  housing= {'address':
            {'addressLine1': '58',
             'addressLine2': 'Shelley Circle',
              'city':'East Windsor',
              'state': 'NJ',
              'zip': '08520'
            },
            'employees':['name1', 'name2', 'name3']
          }

  

  ngOnInit(){
    this.form = this.formBuilder.group({
      houseNumber: this.formBuilder.control(this.housing.address.addressLine1),
      houseStreet: this.formBuilder.control(this.housing.address.addressLine2),
      houseCity: this.formBuilder.control(this.housing.address.city),
      houseState: this.formBuilder.control(this.housing.address.state),
      houseZip: this.formBuilder.control(this.housing.address.zip),
    });
    this.form.disable();
    
    //this.employees= this.formBuilder.array([this.addEmployees()]);
  }

  // addEmployees() {
  //   for(var i=0; i< this.housing.employees.length;i++){
  //     this.employees.push(new FormControl(this.housing.employees[i]));
  //   }
  // }

  // get employees(){
  //   return this.employees;
  // }

}
