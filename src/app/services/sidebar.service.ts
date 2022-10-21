import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu:any[]=[
    {
     titulo: 'Principal',
     icono: 'mdi mdi-gauge',
     submenu: [
      { titulo: 'Main', url:'/'},
      { titulo: 'Barra de Progreso', url:'progress'},
      { titulo: 'Graficas', url:'grafical'},
      { titulo: 'Promesas', url:'promesas'},
      { titulo: 'RXJS', url:'rxjs'}
     ]


    }
  ]

  constructor() { }
}
