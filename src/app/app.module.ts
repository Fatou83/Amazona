import { Form3Service } from './form3.service';
import { BrowserModule} from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Form3Component } from './form3/form3.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import {Ng2TelInputModule} from 'ng2-tel-input';
//date local Fr
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatSortModule} from '@angular/material/sort';
import { ViewComponent } from './view/view.component';




@NgModule({
  declarations: [
    AppComponent,
    Form3Component,
    SearchfilterPipe,
    ViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    MatSortModule,
    BsDatepickerModule.forRoot()


  ],
  providers: [NgbModal,NgbActiveModal,BsDatepickerConfig,{ provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [Form3Component]
})
export class AppModule { }
