import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      houseNumber: this.formBuilder.control('58'),
      houseStreet: this.formBuilder.control('Shelley Circle'),
      houseCity: this.formBuilder.control('East Windsor'),
      houseState: this.formBuilder.control('NJ'),
      houseZip: this.formBuilder.control('08520')
    });
    this.form.get('houseNumber').disable;
  }

}
