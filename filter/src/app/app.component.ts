import { Component } from '@angular/core';

// Importo el archivo JSON 
import listadeMateriales from 'src/assets/json/materiales.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-form';
  // Exporto los datos del archivo JSON a la  vista 
  Materiales: any = listadeMateriales;
}
