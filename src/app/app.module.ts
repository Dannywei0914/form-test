import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsTestComponent } from './modules/components/reactive-forms-test/reactive-forms-test.component';
import { ReactiveFormProfileEditorTestComponent } from './modules/components/reactive-form-profile-editor-test/reactive-form-profile-editor-test.component';
import { ReactiveFormsComponent } from './modules/pages/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsTestComponent,
    ReactiveFormProfileEditorTestComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
