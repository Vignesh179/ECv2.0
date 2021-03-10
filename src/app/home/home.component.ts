import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fname:any = '';
  fprice:any; 
  products:any = [];
  tot:any;
  imgprd:any;
  inc:any = 1;
  dec:any =1;
  constructor() {
    let a = localStorage.getItem('products');
    if (a) {
      this.products = JSON.parse(a);
    }
    let total = localStorage.getItem('tot');
    if(total){
      this.tot = total;
    }
   }
  addProduct() {
    let list = {
      name: this.fname,
      price: this.fprice,
      imgprd: this.imgprd,
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
    this.inc +=1;
  }
  decF(){
    this.dec -=1;
}
  ngOnInit(): void {
  }
  

}
