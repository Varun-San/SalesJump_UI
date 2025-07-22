import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product-upload',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css'],
})
export class ProductUploadComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes('/upload/product-upload');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
  };

  divisionOptions = ['Division A', 'Division B', 'Division C'];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/upload/product-upload']);
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DOWNLOAD FILES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  downloadFile() {
    const link = document.createElement('a');
    link.href = 'Assets/Sample-files/file_example_XLS_10.csv';
    link.download = 'file_example_XLS_10.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLING THE UPLOAD BOTH DRAG AND CLICK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  uploadedFileName: string = '';
  uploadedFile: File | null = null;
  isDragging = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
      input.value = ''; // Clear input so same file can be selected again if needed
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  handleFile(file: File): void {
    const allowedTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];

    if (!allowedTypes.includes(file.type)) {
      alert(
        'Invalid file type. Please upload .xls, .xlsx, or .csv files only.'
      );
      return;
    }

    this.uploadedFile = file;
    this.uploadedFileName = file.name;

    const sizeInKB = (file.size / 1024).toFixed(2) + ' KB';

    this.fileDetails = {
      name: file.name,
      size: sizeInKB,
      analysis: 'Pending...',
      status: 'Ready to Upload',
    };

    if (file.type === 'text/csv') {
      this.analyzeCSV(file);
    } else {
      this.analyzeExcel(file);
    }

    console.log('File ready to upload:', file);
  }

  removeFile(): void {
    this.uploadedFile = null;
    this.uploadedFileName = '';
    this.fileDetails = null;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLING THE FILES DETAILS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  fileDetails: {
    name: string;
    size: string;
    analysis: string;
    status: string;
  } | null = null;

  analyzeCSV(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const rows = text.split('\n').filter((row) => row.trim().length > 0);
      const columns = rows[0]?.split(',').length || 0;

      this.fileDetails!.analysis = `${rows.length} rows, ${columns} columns`;
    };
    reader.readAsText(file);
  }

  analyzeExcel(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      const sheetJson: any[][] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      const rowCount = sheetJson.length;
      const colCount = sheetJson[0]?.length || 0;

      this.fileDetails!.analysis = `${rowCount} rows, ${colCount} columns`;
    };
    reader.readAsArrayBuffer(file);
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
}
