import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';  // Importando o módulo Toast
import { ToolbarModule } from 'primeng/toolbar';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario-rounting.nodule';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UsuarioRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		PasswordModule,
		InputTextareaModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,
		SliderModule,
		ToastModule,
		ToolbarModule
	],
	declarations: [UsuarioComponent]
})

export class UsuarioModule { }
