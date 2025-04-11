import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [ButtonModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent implements OnInit, OnDestroy {
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
  showPassword_new = false;
  showPassword_confirm = false;

  togglePassword_new() {
    this.showPassword_new = !this.showPassword_new;
  }
  togglePassword_confirm() {
    this.showPassword_confirm = !this.showPassword_confirm;
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
}
