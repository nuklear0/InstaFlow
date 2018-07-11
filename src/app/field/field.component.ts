///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';
import {clarifaiKey} from '../../environments/environment';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  area: string;
  flickrArea: string;
  url: string;
  result;
  hashtag: number;
  Clarifai;
  app;

  constructor(public snackBar: MatSnackBar) {
    this.Clarifai = require('clarifai');
    this.app = new this.Clarifai.App({
      apiKey: clarifaiKey
    });
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

    // 0 - instagram, 1 - flickr
   predict(mode) {
     let generated = '';
     const promise = new Promise((resolve, reject) => {
       this.app.models.predict(this.Clarifai.GENERAL_MODEL, this.result).then(
         response => {
           console.log(response);
           // console.log(response.rawData.outputs['0'].data.concepts[''+i+''].name)
           for (let i = 0; i < response.rawData.outputs['0'].data.concepts.length; i++) {
             if (mode === 0) {
               generated += ' #' + response.rawData.outputs['0'].data.concepts['' + i + ''].name;
             } else {
               generated += response.rawData.outputs['0'].data.concepts['' + i + ''].name + ', ';
             }
           }
           resolve(generated);
         }
       );
     });
     if (mode === 0) {
       promise.then(value => this.area += value);
     } else {
       promise.then(value => this.flickrArea += value);
     }
   }




}
