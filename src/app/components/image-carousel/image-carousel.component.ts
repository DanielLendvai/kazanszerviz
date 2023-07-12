/* { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
 */
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
/*      */
interface GalleriaItem {
  imageUrl: string;
}
@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent {
  @ViewChild('inner', { static: true }) innerRef!: ElementRef;

  items: GalleriaItem[] = [
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
    { imageUrl: 'assets/images/cards/Boiler-2.jpg' },
  ];

  currentX = 0;
  initialX = 0;
  isDragging = false;

  ngAfterViewInit(): void {
    this.initDrag();
  }

  @HostListener('document:mouseup')
  @HostListener('document:mouseleave')
  onDragEnd(): void {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent): void {
    if (this.isDragging) {
      this.currentX = this.getXPosition(event) - this.initialX;
      this.translateCarousel();
    }
  }

  @HostListener('document:touchend')
  onDragEndTouch(): void {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  @HostListener('document:touchmove', ['$event'])
  onDragTouch(event: TouchEvent): void {
    if (this.isDragging) {
      this.currentX = this.getXPosition(event) - this.initialX;
      this.translateCarousel();
    }
  }

  onDragStart(event: MouseEvent | TouchEvent): void {
    this.isDragging = true;
    this.initialX = this.getXPosition(event) - this.currentX;

    // Prevent default touchmove event to prevent scrolling on mobile devices
    if (event instanceof TouchEvent) {
      event.preventDefault();
    }
  }

  initDrag(): void {
    const innerElement = this.innerRef.nativeElement;
    innerElement.addEventListener('mousedown', (e: MouseEvent | TouchEvent) =>
      this.onDragStart(e)
    );
    innerElement.addEventListener('touchstart', (e: MouseEvent | TouchEvent) =>
      this.onDragStart(e)
    );
  }

  getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX;
  }

  translateCarousel(): void {
    const innerElement = this.innerRef.nativeElement;
    innerElement.style.transform = `translateX(${this.currentX}px)`;
  }
}
