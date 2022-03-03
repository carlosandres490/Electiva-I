import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  IsUsuario=true
  //Arreglo
  personas: Usuario[]=[
    {id:123, nombre :"Juan", apellido: "Laverde"},
    {id:345, nombre :"Camilo", apellido: "Gómez"},
    {id:678, nombre :"José", apellido: "García"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
