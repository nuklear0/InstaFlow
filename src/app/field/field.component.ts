import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  area: String;

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.area = '';
  }

  generateVertical() {
    this.area = 'To see the full set go to my grid 🗒️\n' +
      '   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
      '     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
      '       ⠀⠀⠀⠀\n' +
      '       ⠀⠀⠀⠀⠀⠀⠀⠀\n' +
      'The following might interest Instagram\'s algorithm more than you  ';
  }

  generateDefault() {
    this.area = '   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
  '     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
  '       ⠀⠀⠀⠀\n' +
  '       ⠀⠀⠀⠀⠀⠀⠀⠀\n' +
  'The following might interest Instagram\'s algorithm more than you  ';
  }

  success() {
    this.snackBar.open('Message copied', null, {
      duration: 2000,
    });
  }

}
