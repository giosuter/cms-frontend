import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.contactId = +id;
        this.loadContact(this.contactId);
      }
    });
  }

  loadContact(id: number): void {
    this.contactService.getContact(id).subscribe((contact) => this.contactForm.patchValue(contact));
  }

  onSubmit(): void {
    const contact: Contact = this.contactForm.value;
    if (this.contactId) {
      this.contactService.updateContact(this.contactId, contact).subscribe(() => this.router.navigate(['/']));
    } else {
      this.contactService.createContact(contact).subscribe(() => this.router.navigate(['/']));
    }
  }

  onCancel(): void {
    this.router.navigate(['/contacts']); // Redirect to Contact List
  }
}