import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, ContactSheet } from './app.component';
import { GalleryComponent, GalleryDialog } from './gallery.component';
import { BioComponent } from './bio.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {Angular2PhotoswipeModule} from 'angular2_photoswipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryDialog,
    ContactSheet,
    BioComponent
  ],
  entryComponents: [GalleryComponent, GalleryDialog, ContactSheet],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDialogModule,
    MatBottomSheetModule,
    ScrollToModule.forRoot(),
    Angular2PhotoswipeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
