import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module'
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
	imports: [
		CommonModule,
		ViewRoutingModule,
		ToastModule,  // Certifique-se de importar aqui também
    	ToolbarModule  // Certifique-se de importar aqui também
	]
})
export class ViewModule { }
