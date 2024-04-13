import { Component, Inject, PLATFORM_ID } from '@angular/core'; // Corrected: Added Inject import
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected: Changed 'styleUrl' to 'styleUrls' and made it an array
})
export class AppComponent {
  constructor(public auth: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {}
}
