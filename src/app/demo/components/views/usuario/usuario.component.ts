import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableRowSelectEvent } from 'primeng/table';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';
import { Estoque } from 'src/app/demo/model/Estoque';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { EstoqueService } from 'src/app/demo/service/estoque.service';
import { ProductService } from 'src/app/demo/service/product.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UsuarioComponent  implements OnInit {
onRowUnselect: any;
selectedProduct: any;
onRowSelect($event: TableRowSelectEvent) {
throw new Error('Method not implemented.');
}


    countries: any[] = [];
    
        value1: any;
    
        value2: any;
    
        value3: any;
    
        value4: any;
    
        value5: any;
    
        value6: any;
    
        value7: any;
    
        value8: any;
    
        value9: any;
    
        value10: any;
    
        productDialog: boolean = false;
    
        submitted: boolean = false;
    
        loading: boolean = false;
    
        activityValues: number[] = [0, 100];
    
        representatives: Representative[] = [];
    
        customers1: Customer[] = [];
    
        customers2: Customer[] = [];
    
        customers3: Customer[] = [];
    
        products: Product[] = [];
    
        estoqueLista: Estoque[] = [];
    
        @ViewChild('filter') filter!: ElementRef;
    
        statuses: any[] = [];
    
        constructor(
                    private customerService: CustomerService, 
                    private estoqueService: EstoqueService,
                    private productService: ProductService,
                    private messageService: MessageService, 
                    private confirmationService: ConfirmationService
                    ) { }
    
        ngOnInit() {
            this.estoqueService.buscarTodosItensEstoque('teste', null).subscribe(
                response => this.estoqueLista = response,
                error => error
            )
            this.customerService.getCustomersLarge().then(customers => {
                this.customers1 = customers;
                this.loading = false;
    
                // @ts-ignore
                this.customers1.forEach(customer => customer.date = new Date(customer.date));
            });
            this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
            this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
            this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    
            this.representatives = [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ];
    
            this.statuses = [
                { label: 'Unqualified', value: 'unqualified' },
                { label: 'Qualified', value: 'qualified' },
                { label: 'New', value: 'new' },
                { label: 'Negotiation', value: 'negotiation' },
                { label: 'Renewal', value: 'renewal' },
                { label: 'Proposal', value: 'proposal' }
            ];
        }
    
        onGlobalFilter(table: Table, event: Event) {
            table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
        }
    
        clear(table: Table) {
            table.clear();
            this.filter.nativeElement.value = '';
        }
    
        openNew() {
            // this.product = {};
            this.submitted = false;
            this.productDialog = true;
        }
    
        deleteSelectedProducts() {
    
        }
    
        deleteProduct(any: any) {
    
        }
    
        editProduct(any: any){
    
        }
    
        getSeverity(status: string) {
            return "";
            
        }
    
        saveProduct() {
    
        }
        
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        }
}

