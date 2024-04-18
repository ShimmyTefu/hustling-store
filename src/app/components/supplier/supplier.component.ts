import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements AfterViewInit{

  showFiller = false;
  screenWidth!: number;
  menuItems: any[] = [
    {label: 'Dashboard', icon: 'dashboard', route: 'supplier/dashboard'},
    {label: 'Products', icon: 'shopping_bag', route: 'supplier/products'},
    {label: 'Orders', icon: 'list_alt', route: 'supplier/orders'},
    {label: 'Profile', icon: 'person', route: 'supplier/profile'},
  ]
  @ViewChild('drawer') drawer !: MatDrawer
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenWidthChanges()
  }
  ngAfterViewInit(): void {
    this.handleScreenWidthChanges()
  }
  handleScreenWidthChanges():void {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 600) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }
}
