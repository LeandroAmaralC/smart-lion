import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstoqueComponent } from './estoque.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EstoqueComponent }
	])],
	exports: [RouterModule]
})
export class EstoqueRoutingModule { }
