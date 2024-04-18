import { Component, Input } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() screenWidth!:number;
  @Input() drawer!:MatDrawer;
  constructor(private route:Router){}
  options:any[]=[{
    name:'Home' ,route:'/home'
  },{
    name:'register' ,route:'/register'
  },{
    name:'login' ,route:'/login'
  },
]
logout(){ this.route.navigate(['/register']);
}
}
