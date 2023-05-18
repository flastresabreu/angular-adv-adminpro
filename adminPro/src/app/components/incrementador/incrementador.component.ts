import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso : number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  disabledMinus: boolean = false;
  disabledPlus: boolean = false;

  cambiarValor(valor : number): number{

    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.valorSalida.emit(this.progreso + valor);
    return this.progreso = this.progreso + valor;
  }

  get getDisabledMinus(){
    if(this.progreso == 0 ){
      return this.disabledMinus = true;
    }
    return this.disabledMinus;
  }

  get getDisabledPlus(){
    if(this.progreso == 100){
      return this.disabledPlus = true;
    }
    return this.disabledPlus;
  }

  onChange(valor: number){
    if(valor >= 100){
      this.progreso = 100;
    }
    else if(valor <= 0){
      this.progreso = 0;
    }
    else{
      this.progreso = valor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
