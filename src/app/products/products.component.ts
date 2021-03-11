import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //variables
  pname:any = '';
  pprice:any; 
  products:any = [];
  tot:any;
  imgprd:any;
  inc:number =1;
  dec:number =1;


  constructor() {
    //Local Storage
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
    let total = localStorage.getItem('tot');
    if(total){
      this.tot = total;
    }
   }
   //add product function
  addProduct() {
    let list = {
      name: this.pname,
      price: this.pprice,
      imgprd: this.imgprd
    }
    
    this.products.push(list);
    localStorage.setItem('products', JSON.stringify(this.products));


    this.tot = this.products.reduce((a:number,b:any)=>{
      return a + parseInt(b.price);
    },0);
    
    localStorage.setItem('tot',this.tot);
  }
 
  delete(i: any) {
    this.products.splice(i, 1);
  }
  incF(){
    this.inc = this.inc+1;
    
  }
  decF(){
    this.dec = this.inc--;
}
  ngOnInit(): void {
  }
  

}
