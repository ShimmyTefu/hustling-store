import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  isRightDisabled: boolean = true;
  isLeftDisabled: boolean = true;

  images = [{
    src: "../../../assets/images/laptops/laptop1.png"
  }, {
    src: "../../../assets/images/laptops/laptop2.png"
  }, {
    src: "../../../assets/images/laptops/laptop3.png"
  }, {
    src: "../../../assets/images/laptops/laptop4.png"
  }, {
    src: "../../../assets/images/laptops/laptop5.png"
  }]




}


