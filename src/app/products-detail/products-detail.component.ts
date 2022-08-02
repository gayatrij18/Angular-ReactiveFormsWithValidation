import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  public imgPath = "../../assets/images/smartphone.jpg";
  public productId:any;
  public productName:any;
  public productPrice:any;
  public productImage:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    var name = this.route.snapshot.paramMap.get('name');
    var price = this.route.snapshot.paramMap.get('price')
    var image = this.route.snapshot.paramMap.get('image')
    this.productId = id;
    this.productName = name;
    this.productPrice = price;
    this.productImage = image;
  
  }

}
