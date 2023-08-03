import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products =[
  {id:1, name:'England', availabel: 'Availabel', price : '200', color: 'white', image: '/assets/products/bike.jpg'},
  {id:2, name:'Usa',  availabel : 'Not-Availabe',price : '300', color: 'gry', image: '/assets/products/man.jpg'},
  {id:3, name:'India', availabel: 'Availabel', price : '400', color: 'red', image: '/assets/products/taj.jpg'},
  {id:4, name:'Canada',availabel : 'Not-Availabe', price : '500', color: 'white', image: '/assets/products/nature.jpg'},
  {id:5, name:'Aus', availabel : 'Availabe', price : '2000', color: 'white', image: '/assets/products/study.jpg'}




]
}
