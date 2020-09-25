import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facility-reporting',
  templateUrl: './facility-reporting.component.html',
  styleUrls: ['./facility-reporting.component.css']
})
export class FacilityReportingComponent implements OnInit {

  form: FormGroup;
  formList: FormArray;
  value;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.value = this.getJson();
    this.form= this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control('')
    });

    this.formList=this.fb.array([]);
    //this.form.setControl('addresses', this.fb.array(this.value || []));
    this.addItem();
    //console.log(this.formList.controls);
  }

  addItem(){
    
    for(var i =0; i< this.value.length;i++){  
      var fg=this.fb.group({
        fl_title: this.value[i].title,
        fl_description: this.value[i].title,
        fl_date: this.value[i].title,
        fl_created_by: this.value[i].title,
        fl_status: this.value[i].title 
      });
      //fg.disable();
      this.formList.push(fg);
      //this.formList.setValue([this.value[i].title,this.value[i].description,this.value[i].created_by, this.value[i].date, this.value[i].status]);
    }
    return;
  }
  getJson(){
    return [{title:'Plumbing', description: 'broken pipe','created_by':'user1','date':'12/12/2004','status':'close'},
    {title:'Toilet clog', description: 'master room toilet clog','created_by':'user1','date':'12/12/2002','status':'open'}];
  }

  onSubmit(mediaItem){
    console.log(mediaItem)
  }

}
