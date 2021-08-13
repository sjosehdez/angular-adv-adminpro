import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscriber, interval, Subscription } from 'rxjs';
import { retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSub : Subscription;
  constructor() {

    this.intervalSub = this.retornaIntervalo().subscribe(console.log)

/*     this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error', error),
      () => console.info('Observable terminado')

    ); */
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();    
  }

  retornaIntervalo(){
    const intervalo$ = interval(500)
      .pipe(
        //take(10), //se ejecuta segun su ubicacion o orden
        map(valor => (valor+1) ),
        filter(valor => (valor % 2 === 0) ? true: false ),
      );
    return intervalo$;
  }

  retornaObservable(): Observable<number>{
    
    let i = -1;

    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        //console.log('tick');
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          console.log('i=2 ... error');
          observer.error('i llego al valor de 2');
        }
      }, 1000)

    });

    return obs$;

  }

}
