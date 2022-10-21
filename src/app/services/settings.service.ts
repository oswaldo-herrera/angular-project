import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme: any = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || ' ./assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href',url);
   }

   changeTheme(theme:string){

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme',url)

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    //{ classList: { remove: (arg0: string) => void; add: (arg0: string) => void; }; getAttribute: (arg0: string) => any; })
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }

  });
  // console.log(this.links)
  }
}
