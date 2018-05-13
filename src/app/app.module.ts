import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ClipboardModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
