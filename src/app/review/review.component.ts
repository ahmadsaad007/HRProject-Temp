import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  approved: false; //value of whether HR accepts or rejects an application
  
  constructor() { }

  ngOnInit(): void {
  }

}
