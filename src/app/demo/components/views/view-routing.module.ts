import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'estoque', data: { breadcrumb: 'Estoque' }, loadChildren: () => import('./estoque/estoque.module').then(m => m.EstoqueModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ViewRoutingModule { }
