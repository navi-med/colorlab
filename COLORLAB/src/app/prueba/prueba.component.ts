import {Component} from "@angular/core";

@Component(
    {
        selector:'prueba',
        templateUrl:'./prueba.component.html',
        styleUrls: ['./prueba.component.css']
    }
)

export class prueba {
    colores = ['rojo', 'verde', 'azul'];
}