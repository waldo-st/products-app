import { Component } from '@angular/core';
import { ProductsNavBarComponent } from "./products-nav-bar/products-nav-bar.component";

@Component({
  selector: 'app-products',
  imports: [ProductsNavBarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
