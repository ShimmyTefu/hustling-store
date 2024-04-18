import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
@Input() image!:any[];
isRightDisabled:Boolean = false;
isLeftDisabled:Boolean = true;
handleOnSlide(side:string){

}
}
