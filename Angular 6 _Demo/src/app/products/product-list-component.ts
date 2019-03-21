import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-product',
    templateUrl: './product-list.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
pageTitle: string = 'Product List';
showImage: boolean = false;
filterValue: string;
errorMessage: string;

onNotify(message: string) : void {
    console.log("message"+message)

}

// getting the value using the function
get filterset(): string{
    console.log("filter value"+this.filterValue)
    return this.filterValue;
}

set filterset(value: string) {
    this.filterValue = value;
    this.filtered = this.filterset ? this.perform(this.filterset) : this.Products;
}

filtered : Iproduct[]; //duplicate array
Products : Iproduct[] = [];

constructor(private productService: ProductService) {
  
}
perform(filterBy: any): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    console.log("check"+this.Products)
    return this.Products.filter((pr: Iproduct) =>
    
       pr.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
toggle(): void{
    this.showImage = !this.showImage;
}

ngOnInit(): void {
    // console.log('Worked');
    this.productService.getProducts().subscribe(
        products => {
            this.Products = products;
            this.filtered = this.Products;
            
            this.filterset = ''

        },
        error => this.errorMessage = <any>error
    );

}

}