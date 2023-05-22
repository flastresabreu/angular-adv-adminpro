import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit{

  ngOnInit(): void {
    this.getUser().then(usuarios => console.log(usuarios));
  }

  getUser(){

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });
    return promesa
  }

}
