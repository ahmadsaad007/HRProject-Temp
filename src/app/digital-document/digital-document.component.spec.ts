import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalDocumentComponent } from './digital-document.component';

describe('DigitalDocumentComponent', () => {
  let component: DigitalDocumentComponent;
  let fixture: ComponentFixture<DigitalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
