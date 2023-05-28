import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss'],
})
export class OurservicesComponent implements AfterViewInit, OnInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private viewportScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
    const fragment = window.location.hash.substring(1);

    if (fragment) {
      const element = this.elementRef.nativeElement.querySelector('#' + fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  ngOnInit(): void {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  htmlContent!: string;

  displayHTML(): void {
    this.htmlContent = `
      <h2>Hello</h2>
      <p>This is a <strong>dynamic</strong> content!</p>
    `;
  }
}
