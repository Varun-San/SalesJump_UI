import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
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

  mode: 'mobile' | 'email' = 'mobile';

  toggleMode() {
    this.mode = this.mode === 'mobile' ? 'email' : 'mobile';
  }
}
