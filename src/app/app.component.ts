import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TareaListComponent, TareaFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mostrarFormulario = false;
  tema: 'light' | 'dark' = 'light';

  constructor(private renderer: Renderer2) { }

  toggleTheme() {
    this.tema = this.tema === 'light' ? 'dark' : 'light';
    this.renderer.setAttribute(document.documentElement, 'data-theme', this.tema);
  }
}
