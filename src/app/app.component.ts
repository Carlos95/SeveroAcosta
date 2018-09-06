import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bottomSheet: MatBottomSheet) {}

  openContact(): void {
    this.bottomSheet.open(ContactSheet);
  }
}

@Component({
  selector: 'contact-sheet',
  templateUrl: 'contact-sheet.html',
  styleUrls: ['./app.component.css']
})
export class ContactSheet {
  
  constructor(private bottomSheetRef: MatBottomSheetRef<ContactSheet>) {}

  
}
