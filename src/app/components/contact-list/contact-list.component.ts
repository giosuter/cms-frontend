import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import this
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterModule], // ✅ Import Angular directives
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.loadContacts(); // ✅ Load contacts on initialization
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  viewContact(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/view-contact', id]);
    }
  }

  editContact(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/edit-contact', id]);
    }
  }

  confirmDelete(id: number | undefined): void {
    if (id === undefined) return; // Prevent accidental undefined calls
  
    const confirmed = window.confirm('Are you sure you want to delete this contact?');
    if (confirmed) {
      this.deleteContact(id);
    }
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      console.log('Contact deleted');
      this.loadContacts(); // ✅ Refresh contact list after deletion
    });
  }
}