import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() public products = [
    {id:1, name:"Nokia 5.1 Plus", price:"8999", image:"assets/images/smartphone.jpg"},
    {id:2, name:"Samsung A10s", price:"10999", image:"assets/images/samsung.jpg"},
    {id:3, name:"Redmi Mi note 5 pro", price:"12999", image:"assets/images/redmiNote5Pro.jpg"},
    {id:4, name:"Vivo Y2", price:"9500", image:"/assets/images/Vivo.jpg"}
   
  ]

  constructor(private router:Router) { }
  ngOnInit(): void {
  }

  onSelect(productInfo:any)
  {
     this.router.navigate(['/product',productInfo.id, productInfo.name, productInfo.price, productInfo.image])
     //this.router.navigate(['product', productInfo.name]) 
    // if(this.products.id === productInfo.id)
    // {
      
    // }
   
  }

}
