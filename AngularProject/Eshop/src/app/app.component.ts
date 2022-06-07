import { Component } from '@angular/core';
import { Product } from './product';
import { Productservice } from './product.service';
@Component({
  selector: 'app-root',
  //templateUrl: './way2.html',
  templateUrl: './app.component.html', 
  //templateUrl: './products.html',  
  //templateUrl:'./ngswitch.html'
   //styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // title = 'Student details page';
  // ProjectOwner='Ravali';
  // name="Manoja";
  // show=true;
  // display()
  // // {
  //    alert("submit button clicked")
  // }
//   product=[
//     {"name":"Ravali","type":"mobile","cost":"9000"},
//     {"name":"Manoja","type":"laptop","cost":"90000"},
// ]
// loginname="user"
// }


export class AppComponent {
productService;
prd:Product[]=[];
constructor() {
this.productService = new Productservice();
}
getProducts() {
this.prd = this.productService.getProducts();
}
}
