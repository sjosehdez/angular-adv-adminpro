import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
})

export class Grafica1Component {

  public labels1: string [] = ['Pan', 'Refrescos', 'Tacos'];

  public data1 = [
    [200, 300, 500]
  ];
 
  //Comando segun para actualizar la version local del proyecto a la global de angular cli
  //ng --version
  //npm install --save-dev @angular/cli@latest
  //ng --version
  //Opcion 2:
  //npm uninstall --save-dev angular-cli
  //npm install --save-dev @angular/cli@latest
  //npm install  
  //Opcion 3:
  //ng update @angular/cli
  //Opcion 4:
  //--Solo necesitas actualizar AngularCli
  //npm install --save-dev @angular/cli@latest  
  //Opcion 5:
  // 1.-Actualizar la CLI de Angular para un espacio de trabajo (local)
  // npm install --save -dev @angular/cli@latest  
  // 2.-Nota: asegúrese de instalar la versión global usando el comando con '-g' si se instaló correctamente.  
  // npm install -g @angular/cli@latest  
  // 3.-Ejecute el comando Actualizar para obtener una lista de todas las dependencias que deben actualizarse  
  // ng update  
  // 4.-Siguiente Ejecute el comando de actualización como se muestra a continuación para cada paquete de núcleo angular individual  
  // ng update @angular/cli @angular/core
  // 5.-Sin embargo, tuve que agregar los comandos de banderas '–force' y '–allow-dirty' además para solucionar todos los demás problemas pendientes.  
  // ng update @angular/cli @angular/core --allow-dirty --force  


}
