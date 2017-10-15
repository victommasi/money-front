import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonSearchComponent} from './person-search/person-search.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {CalendarModule, DataTableModule, InputTextareaModule, SelectButtonModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
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
    InputMaskModule
  ],
  declarations: [
    PersonSearchComponent,
    PersonFormComponent
  ],
  exports: [
    PersonSearchComponent,
    PersonFormComponent
  ]
})
export class PersonModule { }
