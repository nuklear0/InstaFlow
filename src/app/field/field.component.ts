import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  area: string;
  url: string;
  result;
  hashtag: number;

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.area = '';
    this.hashtag = 0;
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

  updateDescription(area) {
    this.area = area;
    this.hashtag = (this.area.match(/#/g) || []).length;
  }

  success() {
    this.snackBar.open('Message copied', null, {
      duration: 2000,
    });
  }

  readUrl() {
    this.result = 'https://drive.google.com/uc?export=view&id=';
    // https://drive.google.com/open?id=182hQwxJGwQjISUS_nTtEsEGyyUsw6Xwt
    if (this.url.includes('https://drive.google.com/open?id=')) {
      this.result += this.url.substring(this.url.lastIndexOf('=') + 1, this.url.length);
    } else {
      this.result += this.url.substring(this.url.lastIndexOf('d/') + 2, this.url.lastIndexOf('/'));
    }
    }




}
