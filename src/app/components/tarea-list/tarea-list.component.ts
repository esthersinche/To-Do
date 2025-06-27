import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {
  tareas = [
    { texto: 'Terminar el informe', completada: false },
    { texto: 'Estudiar para el examen', completada: true },
    { texto: 'Ir al supermercado', completada: false }
  ];

  // Estos métodos son solo stubs para que el template compile
  marcarComoCompletada(index: number): void {
    // Luego aquí llaman al service correspondiente
    console.log('Marcar como completada tarea', index);
  }

  eliminarTarea(index: number): void {
    // Luego aquí llaman al service correspondiente
    console.log('Eliminar tarea', index);
  }

}
