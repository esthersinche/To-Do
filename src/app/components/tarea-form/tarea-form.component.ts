import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.css'
})
export class TareaFormComponent {

  constructor(private tareaservv : TareaService){
  }

  agregarTareaform(texto: string): void{
    if (texto.trim()) {
      this.tareaservv.agregarTareas(texto.trim());
      console.log(this.tareaservv.getTareas());
      
    }
  }

}
