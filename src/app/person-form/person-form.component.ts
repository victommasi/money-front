import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  states = [
    {label: 'Acre', value: 'AC'},
    {label: 'Alagoas', value: 'AL'},
    {label: 'Amazonas', value: 'AM'},
    {label: 'Amapá', value: 'AP'},
    {label: 'Bahia', value: 'BA'},
    {label: 'Ceará', value: 'CE'},
    {label: 'Distrito Federal', value: 'DF'},
    {label: 'Espírito Santo', value: 'ES'},
    {label: 'Maranhão', value: 'MA'},
    {label: 'Mato Grosso', value: 'MT'},
    {label: 'Mato Grosso do Sul', value: 'MS'},
    {label: 'Minas Gerais', value: 'MG'},
    {label: 'Pará', value: 'PA'},
    {label: 'Paraíba', value: 'PB'},
    {label: 'Paraná', value: 'PR'},
    {label: 'Pernambuco', value: 'PE'},
    {label: 'Piauí', value: 'PI'},
    {label: 'Rio de Janeiro', value: 'RJ'},
    {label: 'Rio Grande do Norte', value: 'RN'},
    {label: 'Rondônia', value: 'RO'},
    {label: 'Rio Grande do Sul', value: 'RS'},
    {label: 'Roraima', value: 'RR'},
    {label: 'Santa Catarina', value: 'SC'},
    {label: 'Sergipe', value: 'SE'},
    {label: 'São Paulo', value: 'SP'},
    {label: 'Tocantins', value: 'TO'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
