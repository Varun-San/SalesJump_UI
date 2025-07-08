import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-circular-list',
  imports: [CommonModule, RouterModule, FormsModule, MatButtonModule],
  templateUrl: './circular-list.component.html',
  styleUrl: './circular-list.component.css',
})
export class CircularListComponent implements OnInit {
  ngOnInit() {
    const stored = sessionStorage.getItem('savedCirculars');
    if (stored) {
      this.savedCirculars = JSON.parse(stored);
    }
  }
  circularList: CircularList = {
    prdtImage: '',
    imageBase64: [],
    subject: '',
    uploadDate: '',
  };
  savedCirculars: CircularList[] = [];

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PREIVIEWING THE IMAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  imagePreviews: string[] = [];
  imageFiles: File[] = [];

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result as string);
          this.imageFiles.push(file);

          this.circularList.prdtImage = this.imageFiles
            .map((f) => f.name)
            .join(', ');
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imageFiles.splice(index, 1);
    this.circularList.prdtImage = this.imageFiles.map((f) => f.name).join(', ');
  }

  Save() {
    if (!this.circularList.prdtImage || !this.circularList.subject) {
      alert('Please fill all required fields.');
      return;
    }

    this.circularList.imageBase64 = [...this.imagePreviews];
    this.circularList.uploadDate = new Date().toLocaleDateString();

    this.savedCirculars.push({ ...this.circularList });

    // Save to sessionStorage
    sessionStorage.setItem(
      'savedCirculars',
      JSON.stringify(this.savedCirculars)
    );

    // Reset form
    this.circularList = {
      prdtImage: '',
      imageBase64: [],
      subject: '',
      uploadDate: '',
    };
    this.imagePreviews = [];
    this.imageFiles = [];
  }
}

interface CircularList {
  prdtImage: string;
  imageBase64: string[];
  subject: string;
  uploadDate: string;
}
