import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-document',
  templateUrl: './digital-document.component.html',
  styleUrls: ['./digital-document.component.css']
})
export class DigitalDocumentComponent implements OnInit {

  form: FormGroup;
  retrieveResonse: Object;
  base64Data: any;
  retrievedImage: string;
  selectedFile: any;
  httpClient: any;
  
  constructor(private fb: FormBuilder, private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      document1: new FormControl(''),
      document2: new FormControl(''),
      document3: new FormControl('')
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    //this.httpClient.post('http://localhost:8080/image/upload', mediaItem, { observe: 'response' })
    //   .subscribe((response) => {}
    //   );
    this.router.navigate(['/review'])
    
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(document) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    console.log("Getting Doc")
    // this.httpClient.get('http://localhost:8080/image/get/' + document)
    //   .subscribe(
    //     res => {
    //       this.retrieveResonse = res;
    //       this.base64Data = this.retrieveResonse.picByte;
    //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    //     }
    //   );
  }

}
