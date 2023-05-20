import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.getElementById('theme');

  constructor() {
    console.log("Hola desde el setting");
    this.settingTheme();
   }

   settingTheme(){
    let href="./assets/css/colors/default-dark.css";
      const urlTheme = localStorage.getItem('colorTheme');
      if(!urlTheme){
        this.linkTheme?.setAttribute('href', href);
      }
      else{
        this.linkTheme?.setAttribute('href', urlTheme);
      }
   }

   changetheme(color: string){
    
    const urlTheme = `./assets/css/colors/${color}.css`;
    this.linkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('colorTheme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    let links = document.querySelectorAll('.selector');

    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        element.classList.add('working');
      }
    })
  }
}
