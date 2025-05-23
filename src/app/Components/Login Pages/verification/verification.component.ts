import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-verification',
  imports: [ButtonModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css',
})
export class VerificationComponent implements OnInit, OnDestroy {
  // Slides logic Start
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
  // Slides logic End

  // Toggle mode (mobile/email) Start
  mode: 'mobile' | 'email' = 'mobile';

  toggleMode() {
    this.mode = this.mode === 'mobile' ? 'email' : 'mobile';
  }
  // Toggle mode (mobile/email) End

  // OTP Auto-focus Logic Start
  otpArray = Array(4);
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  onOtpInputChange(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (value && index < this.otpArray.length - 1) {
      this.otpInputs.get(index + 1)?.nativeElement.focus();
    }
    if (value.length > 1) {
      input.value = value.charAt(0);
    }
  }

  onOtpKeyDown(event: any, index: number) {
    const input = event.target;
    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.otpInputs.get(index - 1)?.nativeElement.focus();
    }
  }
  // OTP Auto-focus Logic End
}
