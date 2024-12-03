import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrcamentoDomesticoComponent } from './orcamento-domestico.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OrcamentoDomesticoComponent }
	])],
	exports: [RouterModule]
})
export class OrcamentoDomesticoRoutingModule { }
