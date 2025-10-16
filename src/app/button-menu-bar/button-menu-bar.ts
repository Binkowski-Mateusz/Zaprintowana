import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectMenu } from './select-menu/select-menu';

@Component({
  selector: 'app-button-menu-bar',
  standalone: true,
  imports: [CommonModule, SelectMenu],
  templateUrl: './button-menu-bar.html',
  styleUrl: './button-menu-bar.scss'
})
export class ButtonMenuBar implements OnDestroy {
  hoveredButton: string | null = null;
  private hideTimeout: any = null;

  onButtonHover(buttonName: string) {
    // Clear any pending hide timeout
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    this.hoveredButton = buttonName;
  }

  onContainerLeave() {
    // Add a small delay to prevent flickering when moving between elements
    this.hideTimeout = setTimeout(() => {
      this.hoveredButton = null;
    }, 200);
  }

  onMenuEnter() {
    // Cancel hide if cursor enters the menu
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  ngOnDestroy() {
    // Clean up timeout on component destroy
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }
}
