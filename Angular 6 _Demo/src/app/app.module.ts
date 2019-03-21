import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProductListComponent } from './products/product-list-component';
import { convertToSpaces } from './products/product-pipe';
import { StarComponent } from './shared/star.componenet';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailGuard } from './products/product-details/product-detail.guard';
import { ChartsComponent } from './products/charts/charts.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';
import { FormBuilderWorkComponent } from './form-builder-work/form-builder-work.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProductListComponent,
    convertToSpaces,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    ChartsComponent,
    FormBuilderWorkComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // DecoratorFactory,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
      {
        path: 'welcome', 
        component: WelcomeComponent
      },
      {
        path: '', 
        redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'welcome', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
