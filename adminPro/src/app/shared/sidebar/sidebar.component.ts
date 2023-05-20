import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItem!: any[];

 constructor(private sidebarService: SidebarService){
    this.menuItem = sidebarService.menu;
    console.log(this.menuItem);
 }

 }
