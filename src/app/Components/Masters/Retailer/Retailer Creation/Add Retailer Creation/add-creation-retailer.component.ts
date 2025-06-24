import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-creation-retailer',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-creation-retailer.component.html',
  styleUrl: './add-creation-retailer.component.css',
})
export class AddCreationRetailerComponent {
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RETAILER FIELDS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  retailerFields = [
    { label: 'Name of Retailer', model: 'name', required: true },
    { label: 'Retailer Code', model: 'code', required: true },
    { label: 'Mobile No', model: 'mobile', required: true },
    { label: 'Contact Person Name', model: 'contactPerson' },
    { label: 'Channel', model: 'channel', required: true },
    { label: 'GST No', model: 'gstNo' },
    { label: 'Sales Tax No', model: 'salesTaxNo' },
    { label: 'Route', model: 'route', required: true },
    { label: 'Class', model: 'class', required: true },
    { label: 'Outstanding', model: 'outstanding' },
    { label: 'Credit Limit', model: 'creditLimit' },
    { label: 'Advance Amount', model: 'advanceAmount' },
    { label: 'Retailer Type', model: 'retailerType' },
    { label: 'Potential', model: 'potential' },
    { label: 'Category', model: 'category' },
    { label: 'UOM ERP Code', model: 'uomErpCode', required: true },
    { label: 'Customer Wise Alter', model: 'customerWiseAlter' },
    { label: 'Latitude', model: 'latitude' },
    { label: 'Longitude', model: 'longitude' },
    { label: 'Email', model: 'email' },
    { label: 'City', model: 'city' },
  ];

  editMode: boolean = false;
  editIndex: number | null = null;

  retailer: Retailer = {
    name: '',
    code: '',
    mobile: '',
    contactPerson: '',
    channel: '',
    gstNo: '',
    salesTaxNo: '',
    route: '',
    class: '',
    outstanding: '',
    creditLimit: '',
    advanceAmount: '',
    retailerType: '',
    potential: '',
    category: '',
    uomErpCode: '',
    customerWiseAlter: '',
    latitude: '',
    longitude: '',
    email: '',
    city: '',
    billingAddress: '',
    shoppingAddress: '',
    profileImage: '',
  };

  imagePreviews: string[] = [];
  imageFiles: File[] = [];

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {
    const nav = history.state;
    if (nav && nav.product) {
      this.editMode = true;
      this.editIndex = nav.index;

      const prod = nav.product;
      this.retailer = {
        name: prod.name || '',
        code: prod.code || '',
        mobile: prod.mobile || '',
        contactPerson: prod.contactPerson || '',
        channel: prod.channel || '',
        gstNo: prod.gstNo || '',
        salesTaxNo: prod.salesTaxNo || '',
        route: prod.route || '',
        class: prod.class || '',
        outstanding: prod.outstanding || '',
        creditLimit: prod.creditLimit || '',
        advanceAmount: prod.advanceAmount || '',
        retailerType: prod.retailerType || '',
        potential: prod.potential || '',
        category: prod.category || '',
        uomErpCode: prod.uomErpCode || '',
        customerWiseAlter: prod.customerWiseAlter || '',
        latitude: prod.latitude || '',
        longitude: prod.longitude || '',
        email: prod.email || '',
        city: prod.city || '',
        billingAddress: prod.billingAddress || '',
        shoppingAddress: prod.shoppingAddress || '',
        profileImage: prod.profileImage || '',
      };

      this.imagePreviews = prod.imageBase64 || [];
    }
  }

  get isAddProductRoute(): boolean {
    return this.router.url.includes(
      '/master/retailer/retailer-creation/add-creation-retailer'
    );
  }

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
          this.retailer.profileImage = this.imageFiles
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
    this.retailer.profileImage = this.imageFiles.map((f) => f.name).join(', ');
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/retailer/retailer-creation']);
    });
  }

  saveRetailer() {
    if (
      !this.retailer.name &&
      !this.retailer.code &&
      !this.retailer.uomErpCode
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const retailerData = {
      ...this.retailer,
      profileImage: this.imageFiles.map((f) => f.name).join(', '),
      imageBase64: this.imagePreviews,
    };

    const existingData = sessionStorage.getItem('retailer-data');
    let retailerArray: any[] = [];

    try {
      retailerArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      retailerArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      retailerArray[this.editIndex] = retailerData;
      console.log('Updated retailer at index', this.editIndex);
    } else {
      retailerArray.push(retailerData);
      console.log('Added new retailer');
    }

    sessionStorage.setItem('retailer-data', JSON.stringify(retailerArray));
    this.closeCard();
  }
}

interface Retailer {
  name: string;
  code: string;
  mobile: string;
  contactPerson: string;
  channel: string;
  gstNo: string;
  salesTaxNo: string;
  route: string;
  class: string;
  outstanding: string;
  creditLimit: string;
  advanceAmount: string;
  retailerType: string;
  potential: string;
  category: string;
  uomErpCode: string;
  customerWiseAlter: string;
  latitude: string;
  longitude: string;
  email: string;
  city: string;
  billingAddress: string;
  shoppingAddress: string;
  profileImage: string;

  [key: string]: string;
}
