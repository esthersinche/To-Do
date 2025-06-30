import { Injectable } from '@angular/core';

export interface Tarea{
  texto: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class TareaService {

  private tareaslista: Tarea[] = [];

  constructor() { }

  //metodo para obtener tareas de un array ya inicializado
  getTareas(): Tarea[]{
    return this.tareaslista; 
  }

  //metodo para añadir tareas con solo testo, completada es falso de frente
  agregarTareas(texto : string): void {
    const newtask: Tarea= {texto, completada: false}; //agarra texto
    this.tareaslista.push(newtask);
  }

  //metodo para cambiar estado de tarea buscandolo en la lista
  completarTareas(index: number): void{
    const completed= this.tareaslista[index];

    if (completed ) {//truthy: no null, undefined, false, etcetc
      completed.completada= true;    
    }
  }


  //metodo para eliminar tareas
  eliminarTareas(index2: number): void{
    this.tareaslista.splice(index2, 1);
  }








  
}
