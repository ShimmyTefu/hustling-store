import { ElementRef, Injectable, Input, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarService {
  @Input() data!:any[];
  @Input() cardType!: string;

  isRightDisabled:Boolean = false;
  isLeftDisabled:Boolean = true;
  @ViewChild('slider') slider!: ElementRef;
  constructor() { }
  handleOnSlide(type: string) {
    let scrollValue;

    if (this.slider.nativeElement.scrollWidth > window.innerWidth) {
      // Removing 110px which is the white space on the left and right of the slider and the scrollbar
      if (type === 'left') {
        scrollValue = this.slider.nativeElement.scrollLeft - (window.innerWidth - 110);
      } else {
        scrollValue = this.slider.nativeElement.scrollLeft + (window.innerWidth - 110);
      }

      // Added this to add an animation while scrolling...
      this.slider.nativeElement.scrollTo({
        left: scrollValue,
        behavior: 'smooth'
      });

      let totalUsedWidth = scrollValue + window.innerWidth;

      this.isRightDisabled = (totalUsedWidth >= this.slider.nativeElement.scrollWidth);
      this.isLeftDisabled = (scrollValue < 1);
    } else {
      this.isLeftDisabled = true;
      this.isRightDisabled = true;
    }
  }
}
