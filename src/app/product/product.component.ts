import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	private products: Array<Product>;

  constructor() { }

  ngOnInit() {
  	this.products = [
  		new Product(1,"第一个商品",1.99,3.5,"描述1",["电子产品","硬件设备"]),
  		new Product(2,"第二个商品",9,4.5,"描述2",["电子产品","硬件设备"]),
  		new Product(3,"第三个商品",13299,2.3,"描述3",["电子产品","硬件设备"]),
  		new Product(4,"第四个商品",22.99,3.7,"描述4",["电子产品","硬件设备"]),
  		new Product(5,"第五个商品",7,5,"描述5",["电子产品","硬件设备"]),
  		new Product(6,"第六个商品",5.21,3.5,"描述6",["电子产品","硬件设备"])
  	]
  }

}

export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating: number,
		public desc: string,
		public categories:Array<string>
		){

	}
}