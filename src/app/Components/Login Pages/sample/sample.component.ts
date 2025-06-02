import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [ButtonModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
})
export class SampleComponent implements OnInit, OnDestroy {
  // Adding the slides Common
  slides = [
    {
      image: 'Assets/LoginPageImages/leadforce.png',
      title: 'LeadForce CRM',
      description: 'Effortlessly manage leads, customers and deals!',
    },
    {
      image: 'Assets/LoginPageImages/sales-jump.png',
      title: 'Sales Jump',
      description: 'Manage your FMCG sales effectively with SalesJump',
    },
    {
      image: 'Assets/LoginPageImages/san-clm.png',
      title: 'SAN CLM',
      description: 'Enhance your interaction rate with HCPs digitally',
    },
    {
      image: 'Assets/LoginPageImages/2growhr.png',
      title: '2GrowHR',
      description: 'Effortlessly manage your HR and Payroll with 2GrowHR',
    },
    {
      image: 'Assets/LoginPageImages/san-pharma-sfa.png',
      title: 'SAN Pharma SFA',
      description: 'Automate your Pharma business sales with SAN SFA!',
    },
  ];

  //! Toggle password
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // ! HARD CODED LOGIN USERS
  LoginObject: any = {
    username: '',
    password: '',
  };

  hardcodedUsers = [
    { username: 'admin', password: 'admin', role: 1 },
    { username: 'superadmin', password: 'superadmin', role: 0 },
  ];

  router = inject(Router);

  onLogin() {
    const user = this.hardcodedUsers.find(
      (check) =>
        check.username === this.LoginObject.username &&
        check.password === this.LoginObject.password
    );

    if (user) {
      const fakeToken = 'fake-jwt-token-12345';
      const userDetails = {
        username: user.username,
        role: user.role, // Add this
      };

      const authData = {
        authToken: fakeToken,
        userDetails: userDetails,
      };

      sessionStorage.setItem('authData', JSON.stringify(authData));

      //  Navigate based on role
      const targetUrl =
        user.role === 1 ? '/master/basic_details/company' : '/master/basic_details/division';

      setTimeout(() => {
        this.router.navigateByUrl(targetUrl);
      }, 200);
    } else {
      alert('Invalid Credentials');
    }
  }
}
