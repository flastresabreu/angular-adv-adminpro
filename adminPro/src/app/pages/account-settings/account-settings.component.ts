import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  // public linkTheme = document.getElementById('theme');
 

  constructor(private settingService: SettingsService){

  }

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changetheme(color: string){
    
    this.settingService.changetheme(color);
    
  }


}
