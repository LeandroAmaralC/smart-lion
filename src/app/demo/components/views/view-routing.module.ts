import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'estoque', data: { breadcrumb: 'Estoque' }, loadChildren: () => import('./estoque/estoque.module').then(m => m.EstoqueModule) },
        { path: 'orcamento-domestico', data: { breadcrumb: 'OrcamentoDomestico' }, loadChildren: () => import('./orcamento-domestico/orcamento-domestico.module').then(m => m.OrcamentoDomesticoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ViewRoutingModule { }
