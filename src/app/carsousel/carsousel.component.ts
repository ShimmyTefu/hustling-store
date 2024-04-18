import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-carsousel',
  templateUrl: './carsousel.component.html',
  styleUrls: ['./carsousel.component.scss'],
  // providers: [NgbCarouselConfig] 
})
export class CarsouselComponent {
  image= [{
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

  images = [1,2,3,4,5].map((n) => `../../../assets/images/laptops/laptop${n}.png`);

  constructor(config: NgbCarouselConfig) {
    // 
    // config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
