import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../services/habitaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  habitaciones:any[]=[]

  constructor(public servicio:HabitacionesService ) {
    this.servicio.consultarHabitaciones()
    .subscribe(respuesta => {
      console.log(respuesta)
      this.habitaciones=respuesta.datos
    })
   }

}
