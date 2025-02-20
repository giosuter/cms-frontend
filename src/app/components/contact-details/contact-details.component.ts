import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule], // ✅ Import required modules
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContact(+id).subscribe(
        (data) => (this.contact = data),
        (error) => console.error('Error fetching contact:', error)
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // ✅ Navigate back to the list
  }
}