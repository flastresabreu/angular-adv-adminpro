import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs!: Subscription;

  constructor(){

    this.intervalSubs = this.retornaInterval().subscribe( valor => {
      console.log(valor);
    });

  }
  

  retornaInterval(): Observable<number>{
    const intervalo$ = interval(1000)
                        .pipe(
                          map( x => x+1),
                          filter(x => x%2==0),
                          // take(10)
                        );
    return intervalo$;
  }

  retornaObservable(): Observable<number>{
    let i = 0;
    const obs$ = new Observable<number>( observer => {
      
      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if(i === 5){
          clearInterval(interval);
          observer.complete();
        }

        if(i === 2){
          observer.error('I llego al valor d 2');
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
