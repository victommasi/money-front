import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaleSearchComponent} from './sales-search/sale-search.component';
import {SaleFormComponent} from './sale-form/sale-form.component';
import {FormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DropdownModule, InputTextareaModule, InputTextModule, SelectButtonModule, TooltipModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {ButtonModule} from 'primeng/components/button/button';
import {SharedModule} from '../shared/shared.module';
import {ColoredFieldDirective} from '../colored-field.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  declarations: [
    SaleSearchComponent,
    SaleFormComponent,
    ColoredFieldDirective
  ],
  exports: [
    SaleSearchComponent,
    SaleFormComponent
  ]
})
export class SalesModule { }
