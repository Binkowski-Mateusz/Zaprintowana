import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderService } from './image-loader.service';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss'
})
export class MainMenu implements OnInit {
  private readonly imageLoaderService = inject(ImageLoaderService);
  
  protected readonly images = signal<string[]>([]);
  protected readonly currentImageIndex = signal(2);
  protected readonly isLoading = signal(false);
  protected readonly currentImagePath = signal('');

  ngOnInit() {
    this.loadImages();
  }

  private loadImages() {
    this.imageLoaderService.getAvailableImages().subscribe({
      next: (imageList) => {
        this.images.set(imageList);
        this.loadCurrentImage();
      },
      error: (error) => {
        console.error('Failed to load images:', error);
        // Fallback to a default image or show an error message
        this.images.set(['MenuBackgroundImage00.jpg']);
        this.loadCurrentImage();
      }
    });
  }

  private loadCurrentImage() {
    const currentIndex = this.currentImageIndex();
    const imageList = this.images();
    
    if (imageList.length > 0 && currentIndex < imageList.length) {
      this.isLoading.set(true);
      const imagePath = this.imageLoaderService.getImagePath(imageList[currentIndex]);
      this.currentImagePath.set(imagePath);
    }
  }

  protected onImageLoad() {
    this.isLoading.set(false);
  }

  protected onImageError() {
    this.isLoading.set(false);
    console.warn('Failed to load image:', this.currentImagePath());
  }

  protected nextImage() {
    const imageList = this.images();
    if (imageList.length === 0) return;
    
    const currentIndex = this.currentImageIndex();
    const nextIndex = (currentIndex + 1) % imageList.length;
    this.currentImageIndex.set(nextIndex);
    this.loadCurrentImage();
  }

  protected previousImage() {
    const imageList = this.images();
    if (imageList.length === 0) return;
    
    const currentIndex = this.currentImageIndex();
    const prevIndex = currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    this.currentImageIndex.set(prevIndex);
    this.loadCurrentImage();
  }

  protected goToImage(index: number) {
    const imageList = this.images();
    if (index >= 0 && index < imageList.length) {
      this.currentImageIndex.set(index);
      this.loadCurrentImage();
    }
  }
}
