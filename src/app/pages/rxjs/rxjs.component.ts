import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription} from 'rxjs';
import { retry,take,map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnDestroy  {

  public intervalSubs: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry()
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.log('Error:', error),
    //   () => console.log('Obs terminado')

    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo():Observable<number>{
    // .pipe(
    //   take(10),
    //   map(valor => {
    //     return valor + 1;
    //   })
    // );

    return interval(1000)
                        .pipe(

                          map(valor => valor + 1),
                          filter(valor => (valor % 2 === 0 ) ? true : false),
                          take(10),
                        );

    // return intervalo$;
  }

  retornaObservable(): Observable<number>{
    let i = -1;

  // const obs$ =
  return new Observable<number>(observer => {



    const intervalo = setInterval( () => {

      i++;
      observer.next(i);
      if(i === 4){
        clearInterval(intervalo);
        observer.complete();
      }

      if( i === 2 ) {
        // console.log('i = 2...error')
        observer.error('i llego al valor de 2');
      }

    }, 1000)

  });

  // return obs$;

  }








}
