import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-master-upload',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './master-upload.component.html',
  styleUrl: './master-upload.component.css',
})
export class MasterUploadComponent {
  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ROUTE CHECK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  get isAddHeadquartersRoute(): boolean {
    return this.router.url.includes('/upload/master-upload');
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FORM DATA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  formData: ProductUpload = {
    selectDivision: null,
    tableOption: null,
    tableOption_Download: null,
  };

  // !  HANDLING THE SELECTE SHEET ONLY IN DYNAMICALLY
  divisionOptions: string[] = [];
  selectedSheetData: any[][] = [];

  tableOptions = [
    'Credit Note Register',
    'Distributor Closing Stock',
    'Outlet Upload',
    'Route',
    'Sales and Credit Note Register',
    'Sales Register',
    'Scheme Maping',
    'Supplier Upload',
    'Tax',
    'Territory Upload',
    'TP Upload',
  ];

  tableOptions_download = [
    'Credit Note Register',
    'Distributor Closing Stock',
    'Outlet Upload',
    'Route',
    'Sales and Credit Note Register',
    'Sales Register',
    'Scheme Maping',
    'Supplier Upload',
    'Tax',
    'Territory Upload',
    'TP Upload',
  ];

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CONSTRUCTOR & INITIALIZATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  constructor(private router: Router) {}

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/upload/master-upload']);
    });
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DOWNLOAD FILES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  downloadFile() {
    const filePath = this.fileMap[this.formData.tableOption_Download!];

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'download.csv'; // Extract file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ? DYNAMIC DOWNLOADS AND ASSIGNING THE FILES
  fileMap: { [key: string]: string } = {
    'Credit Note Register': 'Assets/Sample-files/Credit Note Register.xlsx',
    'Distributor Closing Stock':
      'Assets/Sample-files/Distributor Closing Stock.xlsx',
    'Outlet Upload': 'Assets/Sample-files/Outlet Upload.xlsx',
    Route: 'Assets/Sample-files/Route.xlsx',
    'Sales and Credit Note Register':
      'Assets/Sample-files/Sales and Credit Note Register.xlsx',
    'Sales Register': 'Assets/Sample-files/Sales Register.xlsx',
    'Scheme Maping': 'Assets/Sample-files/Scheme Mapping.xlsx',
    'Supplier Upload': 'Assets/Sample-files/Supplier Upload.xlsx',
    Tax: 'Assets/Sample-files/Tax.xlsx',
    'Territory Upload': 'Assets/Sample-files/Territory Upload.xlsx',
    'TP Upload': 'Assets/Sample-files/TP Upload.xlsx',
  };

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
    this.formData.selectDivision = null;
  }

  //! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HANDLING THE FILES DETAILS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  private workbook: XLSX.WorkBook | null = null;

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
      this.workbook = XLSX.read(data, { type: 'array' });

      const firstSheetName = this.workbook.SheetNames[0];
      const worksheet = this.workbook.Sheets[firstSheetName];

      const sheetJson: any[][] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      const rowCount = sheetJson.length;
      const colCount = sheetJson[0]?.length || 0;

      this.fileDetails!.analysis = `${rowCount} rows, ${colCount} columns`;

      // Auto-select first sheet
      this.formData.selectDivision = firstSheetName;
      this.onSheetSelect(firstSheetName);
    };
    reader.readAsArrayBuffer(file);
  }

  onSheetSelect(sheetName: string): void {
    if (!this.workbook || !sheetName) return;

    const worksheet = this.workbook.Sheets[sheetName];
    this.selectedSheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    this.divisionOptions = this.workbook.SheetNames;
  }
}

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERFACE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
interface ProductUpload {
  selectDivision: string | null;
  tableOption: string | null;
  tableOption_Download: string | null;
}
