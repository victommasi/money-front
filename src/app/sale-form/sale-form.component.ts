import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {

 types = [
   { label: 'Receitas', value: 'INCOME'},
   { label: 'Despesas', value: 'OUTGOING'}
 ];

  categories = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  people = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
