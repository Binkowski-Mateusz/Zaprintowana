import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMenu } from './select-menu/select-menu';

@Component({
  selector: 'app-button-menu-bar',
  standalone: true,
  imports: [CommonModule, SelectMenu],
  templateUrl: './button-menu-bar.html',
  styleUrl: './button-menu-bar.scss'
})
export class ButtonMenuBar {
  hoveredButton: string | null = null;

  onButtonHover(buttonName: string) {
    this.hoveredButton = buttonName;
  }

  onContainerLeave() {
    this.hoveredButton = null;
  }
}
