import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-leave-type',
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  templateUrl: './add-leave-type.component.html',
  styleUrl: './add-leave-type.component.css',
})
export class AddLeaveTypeComponent {
  editMode: boolean = false;
  editIndex: number | null = null;

  leave_short_Name = '';
  leave_Name = '';

  constructor(private router: Router) {
    const nav = history.state;

    if (nav && nav.class) {
      this.editMode = true;
      this.editIndex = nav.index;

      this.leave_short_Name = nav.class.leave_short_Name || '';
      this.leave_Name = nav.class.leave_Name || '';
    }
  }

  get isAddClassRetailer(): boolean {
    return this.router.url.includes(
      '/master/leave-master/leave-type/add-leave-type'
    );
  }

  closeCard(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/master/leave-master/leave-type']);
    });
  }

  saveLeaveType() {
    if (!this.leave_short_Name || !this.leave_Name) {
      alert('Please fill all required fields.');
      return;
    }

    const leave_Data = {
      leave_short_Name: this.leave_short_Name,
      leave_Name: this.leave_Name,
    };

    const existingData = sessionStorage.getItem('add_Leave');
    let Leave: any[] = [];

    try {
      Leave = existingData ? JSON.parse(existingData) : [];
    } catch {
      Leave = [];
    }

    if (this.editMode && this.editIndex !== null) {
      Leave[this.editIndex] = leave_Data;
    } else {
      Leave.push(leave_Data);
    }

    sessionStorage.setItem('add_Leave', JSON.stringify(Leave));

    console.log(this.editMode ? 'Updated Leave:' : 'Added Leave:', leave_Data);

    this.closeCard();
  }
}
