import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingPageComponent } from './onboarding/onboarding-page/onboarding-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DigitalDocumentComponent } from './digital-document/digital-document.component';
import { ReviewComponent } from './review/review.component';
import { from } from 'rxjs';
import { HousingComponent } from './housing-component-module/housing/housing.component';
import { HousingDetailsComponent } from './housing-component-module/housing-details/housing-details.component';
import { FacilityReportingComponent } from './housing-component-module/facility-reporting/facility-reporting.component';

const appRoutes: Routes = [
  { path: 'digitaldocument', component: DigitalDocumentComponent },
  {path:'review', component: ReviewComponent},
  {path:'housing', component: HousingComponent},
  {path:'', component: OnboardingPageComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    OnboardingPageComponent,
    DigitalDocumentComponent,
    ReviewComponent,
    HousingComponent,
    HousingDetailsComponent,
    FacilityReportingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
