import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import { PipeComponent } from './pipe/pipe.component';
import { ExponentialPipe } from './exponential.pipe';
import { AssignmentComponent } from './assignment/assignment.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightSearchDirective } from './highlight-search.directive';


@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    RegisterComponent,
    SignupComponent,
    ReactiveformComponent,
    CustomvalidationComponent,
    PipeComponent,
    ExponentialPipe,
    AssignmentComponent,
    HighlightDirective,
    HighlightSearchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
