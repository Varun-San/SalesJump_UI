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
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EDIT MODE HANDLING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  editMode: boolean = false;
  editIndex: number | null = null;

  constructor(private router: Router) {
    const nav = history.state;
    if (nav && nav.product) {
      this.editMode = true;
      this.editIndex = nav.index;

      const prod = nav.product;

      // Assign all form fields from prod as you're already doing
      this.prdtCode = prod.prdtCode || '';
      this.prdtName = prod.prdtName || '';
      this.prdtShortName = prod.prdtShortName || '';
      this.prdtBaseUom = prod.prdtBaseUom || '';
      this.prdtUom = prod.prdtUom || '';
      this.prdtConvFactor = prod.prdtConvFactor || '';
      this.prdtCategory = prod.prdtCategory || '';
      this.prdtGroup = prod.prdtGroup || '';
      this.prdtBrand = prod.prdtBrand || '';
      this.prdtHSNCode = prod.prdtHSNCode || '';
      this.PrdtType = prod.PrdtType || '';
      this.prdtDescription = prod.prdtDescription || '';
      this.prdtPackSize = prod.prdtPackSize || '';
      this.prdtOrderConvQty = prod.prdtOrderConvQty || '';
      this.prdtErpCode = prod.prdtErpCode || '';
      this.prdtTarget = prod.prdtTarget || '';
      this.prdtUnitWeight = prod.prdtUnitWeight || '';
      this.prdtImage = prod.prdtImage || '';
      this.imagePreviews = prod.imageBase64 || [];

      this.rows =
        prod.rows && Array.isArray(prod.rows)
          ? prod.rows
          : [{ tax: '', state: '' }];
    }
  }

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
  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/product/product-details']);
    });
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SAVING THE DATA'S <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  saveProduct() {
    const missingFields: string[] = [];

    if (!this.prdtCode) missingFields.push('Product Code');
    if (!this.prdtName) missingFields.push('Product Name');
    if (!this.prdtShortName) missingFields.push('Short Name');
    if (!this.prdtBaseUom) missingFields.push('Base UOM');
    if (!this.prdtUom) missingFields.push('UOM');
    if (!this.prdtConvFactor) missingFields.push('Conversion Factor');
    if (!this.prdtCategory) missingFields.push('Category');
    if (!this.prdtGroup) missingFields.push('Group');
    if (!this.prdtHSNCode) missingFields.push('HSN Code');
    if (!this.prdtDescription) missingFields.push('Description');
    if (!this.imageFiles || !this.imageFiles.length)
      missingFields.push('At least one Image');
    if (!this.prdtErpCode) missingFields.push('ERP Code');
    if (!this.PrdtType) missingFields.push('Product Type');

    // Check tax rows
    const invalidTaxRows = this.rows.some(
      (row, index) => !row.tax || !row.state
    );
    if (invalidTaxRows) missingFields.push('All Tax Rows (tax and state)');

    if (missingFields.length > 0) {
      alert(
        'Please fill the following required fields:\n\n' +
          missingFields.join('\n')
      );
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
      productArray = existingData ? JSON.parse(existingData) : [];
    } catch {
      productArray = [];
    }

    if (this.editMode && this.editIndex !== null) {
      productArray[this.editIndex] = product;
      console.log('Updated product at index', this.editIndex);
    } else {
      productArray.push(product);
      console.log('Added new product');
    }

    sessionStorage.setItem('product-data', JSON.stringify(productArray));
    this.closeCard();
  }
}
