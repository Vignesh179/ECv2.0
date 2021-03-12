import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //variables
  pname: any = '';
  pprice: any;
  products: any = [];
  tot: any;
  imgprd: any;
  inca: any;
  fval: any
  // deca:any =1;


  constructor() {
    //Local Storage
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
    let total = localStorage.getItem('tot');
    if (total) {
      this.tot = total;
    }
  }
  //add product function
  addProduct() {
    let list = {
      name: this.pname,
      price: this.pprice,
      imgprd: this.imgprd,
      inca: this.inca,
      tot: this.tot
      // dec:this.deca
    }

    this.products.push(list);
    console.log(this.products);
    localStorage.setItem('products', JSON.stringify(this.products));


    this.tot = this.products.reduce((a: any, b: any) => {
      return a + parseInt(b.price) * (b.inca);
    }, 0);

    localStorage.setItem('tot', this.tot);
  }

  delete(i: any) {
    this.products.splice(i, 1);
  }
  clear() {
    let li = {
      name: this.pname = "",
      price: this.pprice = "",
      imgprd: this.imgprd = "",
      inca: this.inca = "",
    }
  }
  //   incF(){
  //     this.inc++
  //   }
  //   decF(){
  //     this.dec = this.inc--;
  //     return this.dec;
  // }
  ngOnInit(): void {
  }


}
