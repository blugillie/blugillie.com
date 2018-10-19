import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.less']
})
export class CvComponent implements OnInit {
  data: any;

  cvBackgroundImage: string;
  showButtons: boolean;

  cvOverlayWidth: number;
  cvOverlayHeight: number;
  overlayDisplay: string;

  infoFullScreenOpacity: number;
  cvFullScreen: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.route.snapshot.data;

    this.cvOverlayWidth = 83.3333;
    this.cvOverlayHeight = 117.5;
    this.cvBackgroundImage = 'url("../../assets/images/CV.compressed.jpg")';
    this.showButtons = false;
    this.overlayDisplay = 'none';

    this.infoFullScreenOpacity = 0;
    this.cvFullScreen = false;
  }

  closeFullscreenCv() {
    this.overlayDisplay = 'none';
  }

  fullScreenCv() {
    this.overlayDisplay = 'block';
  }

  hideCvButtons() {
    this.showButtons = false;
  }

  showCvButtons() {
    this.showButtons = true;
  }

  onScroll(event: WheelEvent) {
    const img = document.getElementsByTagName('img')[0];
    const currentWidth: number = img.width;
    let newWidth;

    // up
    if (event.deltaY <= 0) {
      newWidth = currentWidth * 1.2;
    } else {
      newWidth = currentWidth / 1.2;
    }

    img.width = newWidth;
  }

  maskCv() {
    this.cvBackgroundImage =
      'url("../../assets/images/maskedCV.compressed2.jpg")';
  }

  unMaskCv() {
    this.cvBackgroundImage = 'url("../../assets/images/CV.compressed.jpg")';
  }

  showInfoFullScreen() {
    if (this.infoFullScreenOpacity === 0) {
      this.infoFullScreenOpacity = 1;
    }
  }

  hideInfoFullScreen() {
    if (this.infoFullScreenOpacity === 1) {
      this.infoFullScreenOpacity = 0;
    }
  }

  zoomOut() {
    const newWidth = this.cvOverlayWidth / 1.2;
    const newHeight = this.cvOverlayHeight / 1.2;

    this.cvOverlayWidth = newWidth;
    this.cvOverlayHeight = newHeight;
  }

  zoomIn() {
    const newWidth = this.cvOverlayWidth * 1.2;
    const newHeight = this.cvOverlayHeight * 1.2;

    this.cvOverlayWidth = newWidth;
    this.cvOverlayHeight = newHeight;
  }
}
