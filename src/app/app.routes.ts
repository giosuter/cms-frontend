import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'create-contact', component: ContactFormComponent },
  { path: 'edit-contact/:id', component: ContactFormComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'view-contact/:id', component: ContactDetailsComponent },
];