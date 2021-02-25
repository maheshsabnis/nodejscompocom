import { ArrayType } from '@angular/compiler';
import { ProductInfo } from './app.product.model';
export class Logic {
  private products: Array<ProductInfo>;
  constructor(){

    this.products = new Array<ProductInfo>();
    this.products.push(new ProductInfo(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming',120000));
    this.products.push(new ProductInfo(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Power Press',2000));
    this.products.push(new ProductInfo(3, 'Prd003', 'Lays', 'Food', 'TATA', 'Energy',20));
  }

  getProducts(): Array<ProductInfo> {
    return this.products;
  }

  addProduct(prd:ProductInfo): Array<ProductInfo> {
    this.products.push(prd);
    return this.products;
  }
}
