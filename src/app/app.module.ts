import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { EstoqueService } from './demo/service/estoque.service';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

registerLocaleData(localePt);

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ToastModule,  // Importando o módulo Toast
        ToolbarModule  // Importando o módulo Toolbar
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        CountryService, 
        EstoqueService, 
        CustomerService, 
        EventService, 
        IconService, 
        NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
