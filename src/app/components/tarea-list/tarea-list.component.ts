import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent implements OnInit{
  /*
  tareas = [
    { texto: 'Terminar el informe', completada: false },
    { texto: 'Estudiar para el examen', completada: true },
    { texto: 'Ir al supermercado', completada: false }
  ];*/
  tareas: Tarea[]= [];//inicializa una lista vacia

  constructor(private tareaserv: TareaService){//inyeccion
  }

  ngOnInit(): void {//donde se cargan los datos para poder enseñar algo, aunque esta vacia la lista y llama a servicios
      this.tareas= this.tareaserv.getTareas();
  }

  //añadir una tarea
  agregarTarea(texto: string):void {
    if (texto.trim()) {
      this.tareaserv.agregarTareas(texto.trim());//tareaserv llama al coso de adentro
      this.tareas= this.tareaserv.getTareas();//llama a todas las tareas   
    }
  }

  // Estos métodos son solo stubs para que el template compile
  marcarComoCompletada(index: number): void {
    // Luego aquí llaman al service correspondiente
    //console.log('Marcar como completada tarea', index);
    console.log(index);
    this.tareaserv.completarTareas(index);
  }

  eliminarTarea(index: number): void {
    // Luego aquí llaman al service correspondiente
    //console.log('Eliminar tarea', index);
    console.log(index);
    this.tareaserv.eliminarTareas(index);
  }

}
