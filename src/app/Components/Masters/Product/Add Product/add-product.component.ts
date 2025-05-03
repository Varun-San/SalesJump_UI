import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private router: Router) {}

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CHECKING THE IS ADDPRODUCT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  get isAddProductRoute(): boolean {
    return this.router.url.includes(
      '/master/product/product-details/add-product'
    );
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DECLARING THE NG MODELS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  prdtCode = '';
  prdtName = '';
  prdtShortName = '';
  prdtBaseUom = '';
  prdtUom = '';
  prdtConvFactor = '';
  prdtCategory = '';
  prdtGroup = '';
  prdtBrand = '';
  prdtHSNCode = '';
  PrdtType = '';
  prdtDescription = '';
  prdtPackSize = '';
  prdtOrderConvQty = '';
  prdtErpCode = '';
  prdtTarget = '';
  prdtUnitWeight = '';
  prdtImage: string = '';

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

          // ✅ Update file names after each file is added
          this.prdtImage = this.imageFiles.map((f) => f.name).join(', ');
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imageFiles.splice(index, 1);
    this.prdtImage = this.imageFiles.map((f) => f.name).join(', ');
  }

  // ?  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADDING THE ROW  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // ! Adding the Rows in Tax Allocation
  rows = [{ tax: '', state: '' }];
  addRow() {
    this.rows.push({ tax: '', state: '' });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CLOSE CARD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  closeCard() {
    this.router.navigate(['/master/product/product-details']); // go back to main tab
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SAVING THE DATA'S <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveProduct() {
    if (
      !this.prdtCode ||
      !this.prdtName ||
      !this.prdtShortName ||
      !this.prdtBaseUom ||
      !this.prdtUom ||
      !this.prdtConvFactor ||
      !this.prdtCategory ||
      !this.prdtGroup ||
      !this.prdtHSNCode ||
      !this.prdtDescription ||
      !this.imageFiles.length || // Ensure there are images selected
      !this.prdtErpCode ||
      this.rows.some((row) => !row.tax || !row.state) ||
      !this.PrdtType
    ) {
      alert('Please fill all required fields.');
      return;
    }

    const product = {
      prdtCode: this.prdtCode,
      prdtName: this.prdtName,
      prdtShortName: this.prdtShortName,
      prdtBaseUom: this.prdtBaseUom,
      prdtUom: this.prdtUom,
      prdtConvFactor: this.prdtConvFactor,
      prdtCategory: this.prdtCategory,
      prdtGroup: this.prdtGroup,
      prdtBrand: this.prdtBrand,
      prdtHSNCode: this.prdtHSNCode,
      PrdtType: this.PrdtType,
      prdtDescription: this.prdtDescription,
      prdtPackSize: this.prdtPackSize,
      prdtOrderConvQty: this.prdtOrderConvQty,
      prdtErpCode: this.prdtErpCode,
      prdtTarget: this.prdtTarget,
      prdtUnitWeight: this.prdtUnitWeight,
      prdtImage: this.imageFiles.map((f) => f.name).join(', '), // Only file names in the string
      imageBase64: this.imagePreviews, // Storing base64 encoded images
    };

    const existingData = sessionStorage.getItem('product-data');
    let productArray: any[] = [];

    try {
      const parsed = JSON.parse(existingData || '[]');
      productArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (e) {
      console.warn('Failed to parse sessionStorage data. Resetting...');
      productArray = [];
    }

    productArray.push(product);
    sessionStorage.setItem('product-data', JSON.stringify(productArray));

    console.log('Saved product:', product);
    console.log('All products:', productArray);

    this.closeCard();
  }
}
