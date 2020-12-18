import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './application/crud/crud.component';
import { TutorielleComponent } from './application/tutorielle/tutorielle.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { ErrorComponent } from './application/error/error.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './application/crud/read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    TutorielleComponent,
    FormulaireComponent,
    FunComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //template
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
