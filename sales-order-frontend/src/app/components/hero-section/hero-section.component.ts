import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
      image: 'assets/img/product1.jpg',
      text: 'Slide 1 Text',
    },
    {
      image: 'assets/img/product2.jpg',
      text: 'Slide 2 Text',
    },
    {
      image: 'assets/img/product3.jpg',
      text: 'Slide 3 Text',
    },
  ];
  autoplayInterval = 2000; 
}
