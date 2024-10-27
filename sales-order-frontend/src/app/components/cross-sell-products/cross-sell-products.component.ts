import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cross-sell-products',
  templateUrl: './cross-sell-products.component.html',
  styleUrls: ['./cross-sell-products.component.css']
})
export class CrossSellProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/products').subscribe(data => {
      this.products = data;
      console.log(data)
    });
  }
}
