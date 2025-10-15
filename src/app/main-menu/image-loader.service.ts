import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
  private readonly imageBasePath = 'assets/menu-background-images/';

  constructor(private http: HttpClient) {}

  /**
   * Get list of available images from the menu-background-images folder
   * In a real application, this would be an API call
   */
  getAvailableImages(): Observable<string[]> {
    // For now, return a predefined list
    // In a real implementation, you would:
    // 1. Call an API endpoint that returns the list of images
    // 2. Or use a file listing service
    // 3. Or scan the assets folder dynamically
    
    const imageList = [
      'MenuBackgroundImage00.jpg',
      'MenuBackgroundImage01.jpg',
      'MenuBackgroundImage01 copy.jpg', 
      'MenuBackgroundImage01 copy 2.jpg'
    ];
    
    return of(imageList);
  }

  /**
   * Get the full path for an image
   */
  getImagePath(imageName: string): string {
    return this.imageBasePath + imageName;
  }

  /**
   * Check if an image exists (for error handling)
   */
  checkImageExists(imageName: string): Observable<boolean> {
    const imagePath = this.getImagePath(imageName);
    return this.http.head(imagePath).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
