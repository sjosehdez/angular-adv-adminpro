import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

/*     const promesa = new Promise((resolve, reject) => {
      if (true) {
        resolve('Hola Mundo desde una promesa');
      } else {
        reject('Algo salio mal!');
      }
    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    })
      .catch(error => {
        console.log('Error en mi promesa');
      });

    console.log('Fin del Init'); */

    this.getUsuarios().then(
      usuarios => {
        console.log(usuarios);
      }
    );

  }

  getUsuarios(){
    
    return new Promise( resolve =>{

      fetch('https://reqres.in/api/users')
        .then( 
          resp => resp.json()
          .then( body => console.log(body.data))
          );

          console.log('Después de la promesa');
          
    });
      
      //{ resp.json().then( body => console.log(body))}
  }

}
