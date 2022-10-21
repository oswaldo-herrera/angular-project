import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  //public linkTheme: any = document.querySelector('#theme');
 //= document.querySelectorAll('.selector');
  //public links!: NodeListOf<Element>;
  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
    //this.links =  document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme();

  }

  changeTheme(theme:string){
    this.settingsService.changeTheme( theme );

    // const url = `./assets/css/colors/${theme}.css`;
    // this.linkTheme.setAttribute('href',url);
    // localStorage.setItem('theme',url)

    // console.log(url)
    //this.checkCurrentTheme();
  }


  // checkCurrentTheme(){
  //     //{ classList: { remove: (arg0: string) => void; add: (arg0: string) => void; }; getAttribute: (arg0: string) => any; })
  //     this.links.forEach(elem => {
  //       elem.classList.remove('working');
  //       const btnTheme = elem.getAttribute('data-theme');
  //       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
  //       const currentTheme = this.linkTheme.getAttribute('href');

  //       if(btnThemeUrl === currentTheme) {
  //         elem.classList.add('working');
  //       }

  //   });
  //   // console.log(this.links)
  // }

}
