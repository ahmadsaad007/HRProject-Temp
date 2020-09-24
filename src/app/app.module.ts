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

const appRoutes: Routes = [
  { path: 'digitaldocument', component: DigitalDocumentComponent },
  {path:'review', component: ReviewComponent},
  {path:'', component: OnboardingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OnboardingPageComponent,
    DigitalDocumentComponent,
    ReviewComponent
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
