import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';



@Injectable()
export class CvResolver implements Resolve<string> {

   private cv = document.getElementsByClassName('cv')[0];
   private img = document.createElement('img');

constructor() {}

resolve() {

   // this.img.src = '../../assets/images/CV.compressed.jpg';

   // this.cv.appendChild(this.img);

   // this.cv.addEventListener('load', this.completeLoad);

   return 'testing';
}

completeLoad() {
   this.cv.removeEventListener('load', this.completeLoad);
}

}

