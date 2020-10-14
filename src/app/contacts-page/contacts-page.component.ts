import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreDataService } from './store-data.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });
  formData = {};
  message = false;
  error = false;

  constructor(public storeData: StoreDataService) { }

  ngOnInit(): void {
  }

  closeMessage() {
    this.message = false;
    this.error = false;
    location.reload();
  }

  onSubmit() {
    this.formData = {
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      subject: this.contactForm.get('subject').value,
      body: this.contactForm.get('body').value
    };
    const inquiry = this.formData;
    this.storeData.createNewInquiry(inquiry).then((res) => {
      this.message = true;
    }).catch((err) => {
      this.error = true;
    })
  }
}
