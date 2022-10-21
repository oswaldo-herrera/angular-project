import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })
    // const promesa = new Promise( (resolve,reject) =>  { //las promesas son ejecutadas uando las tareas quiero que se ejecuten a destiempo
    //   if(false){
    //     resolve('soy la promesa');
    //   }else{
    //     reject('Algo salio mal');
    //   }


    // });
    //catch es para si hay un error
    //finally no importa si es un error o esta bien al final lo ejecuta
    //then cuando se hace correctamente lo ejecuta
    // promesa.then( (mensaje) =>{
    //   console.log(mensaje)
    // })
    // .catch(error => console.log('Error en mi promesa', error)); //.catch para agarrar un error (cachar)

    // console.log('Fin del init');
  }

  getUsuarios(){
    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then(resp => resp.json() )
      .then(body => resolve( body.data ));

    });

    return promesa;


  }

}
