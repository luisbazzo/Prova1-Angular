import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
valorReal : number = 0.20;
valorDolar : number = 1;
valorEuro : number = 1.09;
valorPesoArgentino : number = 0.0047;

valorCambio : number = 0;
valorConverter : number = 0;
valorConvertido : number = 0;
}
