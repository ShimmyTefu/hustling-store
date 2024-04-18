import { AfterViewInit, Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarService } from 'src/app/slider-services/scrollbar.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements AfterViewInit {
  @Input() Image!: any[];
  rightDisabled: any;
  leftDisabled: any;
  constructor(public scrollBar: ScrollbarService , config: NgbCarouselConfig) {
    this.rightDisabled = this.scrollBar.isRightDisabled
    this.leftDisabled = this.scrollBar.isLeftDisabled
   
    // 
    // config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  OnSlide(side: string): void {
    this.scrollBar.handleOnSlide(side)
  }

  ngAfterViewInit(): void {

  }
}
