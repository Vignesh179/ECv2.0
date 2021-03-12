import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

products:any=[];
tot:any;


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
 
   
 

 delete(i: any) {
   this.products.splice(i, 1);
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

