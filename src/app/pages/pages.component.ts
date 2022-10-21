import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();


      //const url = localStorage.getItem('theme') || ' ./assets/css/colors/purple-dark.css'

      //const url = `./assets/css/colors/${theme}.css`;
      //this.linkTheme.setAttribute('href',url);
      //localStorage.getItem('theme')

      //console.log(url)

  }


}
