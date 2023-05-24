import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss'],
})
export class OurservicesComponent implements AfterViewInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const fragment = window.location.hash.substring(1);
    console.log(fragment)
    if (fragment) {
      const element = this.elementRef.nativeElement.querySelector(
        '#' + fragment
      );
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
