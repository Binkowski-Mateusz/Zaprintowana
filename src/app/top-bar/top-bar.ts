import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {
  protected readonly title = signal('Zaprintowana');

  protected openFacebook(): void {
    window.open('https://www.facebook.com', '_blank');
  }

  protected openInstagram(): void {
    window.open('https://www.instagram.com', '_blank');
  }

  protected openTikTok(): void {
    window.open('https://www.tiktok.com', '_blank');
  }
}
