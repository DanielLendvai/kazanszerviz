import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent {
  imageObject = [
    {
      image: 'assets/images/boiler-repair-1.jpg',
      thumbImage: 'assets/images/boiler-repair-1.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },
    {
      image: 'assets/images/water-heater-1816642.jpg',
      thumbImage: 'assets/images/water-heater-1816642.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },
    {
      image: 'assets/images/radiator-6679858_1920.jpg',
      thumbImage: 'assets/images/radiator-6679858_1920.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },
    {
      image: 'assets/images/water-heater-1816642.jpg',
      thumbImage: 'assets/images/boiler-repair-1.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },
    {
      image: 'assets/images/water-heater-1816642.jpg',
      thumbImage: 'assets/images/boiler-repair-1.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },
    {
      image: 'assets/images/water-heater-1816642.jpg',
      thumbImage: 'assets/images/boiler-repair-1.jpg',
      alt: 'alt of image',
      title: 'kép címe, leírása',
    },

  ];
}
