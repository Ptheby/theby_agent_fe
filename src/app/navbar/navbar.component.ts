import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})







export class NavbarComponent implements OnInit {
  isAuthenticated = false;
userEmail: any | null;
  userSub: Subscription | undefined;





constructor(
  private router: Router,
  private authService: AuthService,

  private route: ActivatedRoute
) {}
ngOnInit() {
   this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user;

    });



}

onLogout(){
  this.onLogout= this.authService.logout
};
}
