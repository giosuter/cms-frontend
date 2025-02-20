import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'create-contact', component: ContactFormComponent },
  { path: 'edit-contact/:id', component: ContactFormComponent },
  { path: 'contact-details/:id', component: ContactDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }