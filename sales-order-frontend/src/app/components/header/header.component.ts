import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../../services/sales-order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    salesOrders: any[] = [];
    filters: any = {
      customerName: '',
      email: '',
      mobileNumber: '',
      status: '',
      orderDate: '',
      createdAt: '',
      updatedAt: ''
    };
  
    constructor(private salesOrderService: SalesOrderService) {}
  
    ngOnInit(): void {
        // Initially, do not fetch orders
        this.salesOrders = [];
      }
    
      onSearch(): void {
        console.log("777777jnjnnojknjon");

        // Check if at least one filter value is entered and is not empty
        const hasFilter = Object.values(this.filters).some(value => {
          // Check for strings
          if (typeof value === 'string') {
            return value.trim() !== '';
          }
          // Check for other types (like date or number)
          return value !== null && value !== undefined;
        });
      
        if (!hasFilter) {
          // If no filters, clear the results
          this.salesOrders = [];
          return;
        }
      
        // Call the service only if filters are present
        this.salesOrderService.getSalesOrders(this.filters).subscribe(
          (orders) => {
            this.salesOrders = orders;
          },
          (error) => {
            console.error('Error fetching sales orders:', error);
          }
        );
      }
      
    }