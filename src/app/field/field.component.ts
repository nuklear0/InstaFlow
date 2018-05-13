import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  area: String;
  url: string;
  result;

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

  readUrl() {
    this.result = 'https://drive.google.com/uc?export=view&id=';
    console.log(this.url);
    this.result += this.url.substring(this.url.lastIndexOf('d/') + 2, this.url.lastIndexOf('/'));
    console.log(this.result);
    }




}
