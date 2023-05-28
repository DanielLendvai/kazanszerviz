import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  navigateToSection(fragment: string): void {
    this.router.navigate(['/services'], { fragment: fragment });
  }
  ngOnInit(): void {
    const cardsTexts: string[] = ['Gázkészülék javítás', 'Gázkészülék karbantartás', 'Gázkészülék csere', 'Üzembehelyezés', 'Fűtesrendszer átmosás'];
    const cards: NodeListOf<Element> = document.querySelectorAll('.card');
  
    cards.forEach((card: Element, index: number) => {
      card.setAttribute('data-value', cardsTexts[index]);
    });
  }
}
